import { postEmailAuth } from "@api/auth/postEmailAuth"

import { UseQueryOptions } from "@tanstack/react-query"

import { QUERYKEY } from "@constants/queryKey"

export const userInfoOptions: UseQueryOptions<
  Awaited<ReturnType<typeof postEmailAuth>>
> = {
  queryKey: [QUERYKEY.USER_INFO],
  queryFn: () => postEmailAuth(),
}
