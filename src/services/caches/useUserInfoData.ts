import { UserSummary } from "api-models"

import { useQueryClient } from "@tanstack/react-query"

import { QUERYKEY } from "@constants/queryKey"

export const useUserInfoData = () => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData<UserSummary>([QUERYKEY.USER_INFO])
}
