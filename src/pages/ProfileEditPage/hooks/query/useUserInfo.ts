import { useSuspenseQuery } from "@tanstack/react-query"

import { getUserDetail } from "@apis/user/getUserDetail"

export const useUserInfo = (userId: number) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserDetail({ userId }),
  })

  if (error) {
    console.log(error)
  }
  return { data }
}
