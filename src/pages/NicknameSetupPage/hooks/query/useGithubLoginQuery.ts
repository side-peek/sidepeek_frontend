import { useSuspenseQuery } from "@tanstack/react-query"

import { postGithubLogin } from "@apis/auth/postGithubLogin"

import { QUERYKEY } from "@constants/queryKey"

interface UseGithubLoginQuery {
  code: string
}

export const useGithubLoginQuery = (body: UseGithubLoginQuery) => {
  return useSuspenseQuery({
    queryKey: [QUERYKEY.GITHUB_LOGIN, body],
    queryFn: () => postGithubLogin(body),
  })
}
