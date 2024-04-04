import { Avatar, AvatarProps } from "@chakra-ui/react"
import { UserSummary } from "api-models"

interface CommentsAvatarProps extends AvatarProps {
  user: UserSummary
}

const CommentsAvatar = ({ user, ...props }: CommentsAvatarProps) => {
  return (
    <Avatar
      width="5rem"
      height="5rem"
      _hover={user && { opacity: "0.5" }}
      {...props}
      name=""
      cursor={user && "pointer"}
    />
  )
}

export default CommentsAvatar
