import { useSuspenseQuery } from "@tanstack/react-query"

import { getUserListByNickname } from "@apis/user/getUserListByNickname"

export const useGetUserListByNickname = (nickname: string) => {
  return useSuspenseQuery({
    queryKey: ["userNickName", nickname],
    queryFn: () => getUserListByNickname(nickname),
    select: (data) => data.users,
  })
}
