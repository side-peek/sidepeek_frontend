import { UseQueryOptions } from "@tanstack/react-query"

import { getEmailAuth } from "@/api/auth/getEmailAuth"

import { QUERYKEY } from "@constants/queryKey"

export const userInfoOptions: UseQueryOptions<
  Awaited<ReturnType<typeof getEmailAuth>>
> = {
  queryKey: [QUERYKEY.USER_INFO],
  queryFn: getEmailAuth,
}
