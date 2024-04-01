import { getInput, setFailed } from "@actions/core"
import { context, getOctokit } from "@actions/github"

try {
  const candidates = getInput("reviewers").split(", ")
  const reviewers = selectRandomReviewer(candidates, 2)
  const token = getInput("github_token")
  const octokit = getOctokit(token)

  const { owner, repo } = context.repo
  const pull_number = context.issue.number

  const response = await octokit.rest.pulls.listRequestedReviewers({
    owner,
    repo,
    pull_number,
  })

  if (response.data.users.length < 2) {
    await octokit.rest.pulls.requestReviewers({
      owner,
      repo,
      pull_number,
      reviewers: reviewers,
    })
  }
} catch (error) {
  setFailed(error.message)
}

function selectRandomReviewer(reviewers, num) {
  const creator = context.payload.pull_request.user.login

  const shuffled = reviewers
    .filter((reviewer) => reviewer !== creator)
    .sort(() => 0.5 - Math.random())

  return shuffled.slice(0, num)
}
