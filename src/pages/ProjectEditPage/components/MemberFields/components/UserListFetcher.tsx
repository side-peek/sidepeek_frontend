import { UserSummary } from "api-models"

import { useGetUserListByNickname } from "../hooks/useGetUserListByNickname"

interface UserListFetcherProps {
  value: string
  render: (data: UserSummary[]) => JSX.Element
}

//TODO : value값이 없을 경우 고려
const UserListFetcher = ({ value, render }: UserListFetcherProps) => {
  const { data } = useGetUserListByNickname(value)

  return <>{render(data)}</>
}

export default UserListFetcher
