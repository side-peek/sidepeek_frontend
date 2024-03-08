import { useQuery } from "@tanstack/react-query"

import { getEmailAuth } from "@/api/auth/getEmailAuth"

import { QUERYKEY } from "@constants/queryKey"

export const useUserInfoData = () => {
  return useQuery<Awaited<ReturnType<typeof getEmailAuth>>>({
    queryKey: [QUERYKEY.USER_INFO],
  }).data
}
