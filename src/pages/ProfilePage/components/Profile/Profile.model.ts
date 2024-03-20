import { useQuery } from "@tanstack/react-query"

import { getUserDetail } from "@apis/user/getUserDetail"

interface UserIdProps {
  userId: number
}

export const useUserInfo = ({ userId }: UserIdProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserDetail({ userId }),
  })

  return { isLoading, data }
}
