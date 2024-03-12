import { postEmailAuth } from "@api/auth/postEmailAuth"

import { useQuery } from "@tanstack/react-query"

import { QUERYKEY } from "@constants/queryKey"

export const useUserInfoData = () => {
  return useQuery<Awaited<ReturnType<typeof postEmailAuth>>>({
    queryKey: [QUERYKEY.USER_INFO],
  }).data
}
