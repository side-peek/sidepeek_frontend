import { getUserListByNickname } from "@api/user/getUserListByNickname"

import { useSuspenseQuery } from "@tanstack/react-query"

export const useGetUserListByNickname = (nickname: string) => {
  return useSuspenseQuery({
    queryKey: ["userNickName", nickname],
    queryFn: () => getUserListByNickname(nickname),
    select: (data) => data.users,
  })
}
