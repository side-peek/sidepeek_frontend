import { useQuery } from "@tanstack/react-query"

import { getUserDetail } from "@apis/user/getUserDetail"

export const useUserInfo = (userId: number) => {
  const { isLoading, data } = useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserDetail({ userId }),
    gcTime: 0,
  })

  return { isLoading, data }
}
