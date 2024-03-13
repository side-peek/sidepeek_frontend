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
      _hover={{ opacity: "0.5" }}
      src={user && user.profileImageUrl ? user.profileImageUrl : ""}
      {...props}
      cursor="pointer"
    />
  )
}

export default CommentsAvatar
