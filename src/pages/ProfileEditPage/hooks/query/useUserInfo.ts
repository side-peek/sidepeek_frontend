import { useSuspenseQuery } from "@tanstack/react-query"

import { getUserDetail } from "@apis/user/getUserDetail"

export const useUserInfo = (userId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserDetail({ userId }),
  })

  return { data }
}
