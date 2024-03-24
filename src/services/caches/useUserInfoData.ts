import { useQueryClient } from "@tanstack/react-query"

import { postEmailAuth } from "@apis/auth/postEmailAuth"

import { QUERYKEY } from "@constants/queryKey"

export const useUserInfoData = () => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData<Awaited<ReturnType<typeof postEmailAuth>>>([
    QUERYKEY.USER_INFO,
  ])
}
