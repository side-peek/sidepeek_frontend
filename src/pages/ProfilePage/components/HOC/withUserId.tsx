import { ComponentType } from "react"
import { useParams } from "react-router-dom"

export interface UserIdProps {
  userId: string
}
const withUserId = <P extends UserIdProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const ComponentWithUserId = (props: Omit<P, keyof UserIdProps>) => {
    const { userId } = useParams()

    if (!userId) {
      return null
    }
    return (
      <WrappedComponent
        {...(props as P)}
        userId={userId}
      />
    )
  }
  return ComponentWithUserId
}

export default withUserId
