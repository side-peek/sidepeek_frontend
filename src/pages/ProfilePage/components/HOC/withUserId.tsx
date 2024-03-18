import { ComponentType } from "react"
import { useParams } from "react-router-dom"

import { useUserInfoData } from "@services/caches/useUserInfoData"

export interface UserIdProps {
  userId: string
  isMe: boolean
}
const withUserId = <P extends UserIdProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const ComponentWithUserId = (props: Omit<P, keyof UserIdProps>) => {
    const { userId } = useParams()
    const data = useUserInfoData()
    const isMe = Number(userId) === data?.id

    if (!userId) {
      return null
    }

    return (
      <WrappedComponent
        {...(props as P)}
        userId={userId}
        isMe={isMe}
      />
    )
  }
  return ComponentWithUserId
}

export default withUserId
