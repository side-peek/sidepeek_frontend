import { UseQueryOptions } from "@tanstack/react-query"

import { postEmailAuth } from "@apis/auth/postEmailAuth"

import authToken from "@stores/authToken"

import { QUERYKEY } from "@constants/queryKey"

export const userInfoOptions: UseQueryOptions<
  Awaited<ReturnType<typeof postEmailAuth>>
> = {
  queryKey: [QUERYKEY.USER_INFO],
  queryFn: () => postEmailAuth(),
  enabled: Boolean(authToken.getRefreshToken()),
}
