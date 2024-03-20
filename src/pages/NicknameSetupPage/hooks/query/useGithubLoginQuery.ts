import { useSuspenseQuery } from "@tanstack/react-query"

import { getGithubLogin } from "@apis/auth/getGithubLogin"

import { QUERYKEY } from "@constants/queryKey"

interface UseGithubLoginQuery {
  code: string
  state: string
}

export const useGithubLoginQuery = (body: UseGithubLoginQuery) => {
  return useSuspenseQuery({
    queryKey: [QUERYKEY.GITHUB_LOGIN, body],
    queryFn: () => getGithubLogin(body),
  })
}
