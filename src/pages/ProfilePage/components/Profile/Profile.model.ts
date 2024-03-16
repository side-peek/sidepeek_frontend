import { useQuery } from "@tanstack/react-query"

import { getUserDetail } from "@apis/user/getUserDetail"

interface UserIdProps {
  userId: number
}

// TODO: useQuery - select 옵션 사용해보기
export const useUserInfo = ({ userId }: UserIdProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserDetail({ userId }),
    gcTime: 0,
  })

  return { isLoading, data }
}
