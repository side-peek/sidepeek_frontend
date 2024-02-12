import { getInput, setFailed } from "@actions/core"
import { context, getOctokit } from "@actions/github"

try {
  const reviewers = getInput("reviewers")
  const token = getInput("github_token")
  const octokit = getOctokit(token)

  const { owner, repo } = context.repo
  const pull_number = context.issue.number

  await octokit.rest.pulls.requestReviewers({
    owner,
    repo,
    pull_number,
    reviewers: reviewers.split(", "),
  })
} catch (error) {
  setFailed(error.message)
}
