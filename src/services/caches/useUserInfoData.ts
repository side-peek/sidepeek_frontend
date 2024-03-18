import { useQuery } from "@tanstack/react-query"

import { postEmailAuth } from "@apis/auth/postEmailAuth"

import { QUERYKEY } from "@constants/queryKey"

export const useUserInfoData = () => {
  return useQuery<Awaited<ReturnType<typeof postEmailAuth>>>({
    queryKey: [QUERYKEY.USER_INFO],
  }).data
}
