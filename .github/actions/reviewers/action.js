import { getInput, setFailed } from "@actions/core"
import { context, getOctokit } from "@actions/github"

try {
  const candidates = getInput("reviewers").split(", ")
  const reviewers = selectRandomReviewer(candidates)
  const token = getInput("github_token")
  const octokit = getOctokit(token)

  const { owner, repo } = context.repo
  const pull_number = context.issue.number

  const response = await octokit.rest.pulls.listRequestedReviewers({
    owner,
    repo,
    pull_number,
  })

  console.log(response)

  await octokit.rest.pulls.requestReviewers({
    owner,
    repo,
    pull_number,
    reviewers: reviewers,
  })
} catch (error) {
  setFailed(error.message)
}

function selectRandomReviewer(reviewers) {
  const requiredReviewer = 2
  const creator = context.payload.pull_request.user.login
  const candidates = reviewers.filter((reviewer) => reviewer !== creator)

  const result = []
  for (let i = 0; i < requiredReviewer; i++) {
    const { length } = candidates
    if (length === 0) {
      break
    }

    const randomIndex = Math.floor(Math.random() * length)
    result.push(...candidates.splice(randomIndex, 1))
  }
  return result
}
