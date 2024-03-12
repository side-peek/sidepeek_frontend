import { Avatar, AvatarProps } from "@chakra-ui/react"

interface CommentsAvatarProps extends AvatarProps {}
const CommentsAvatar = ({ ...props }: CommentsAvatarProps) => {
  return (
    <Avatar
      width="5rem"
      height="5rem"
      _hover={{ opacity: "0.5" }}
      {...props}
      cursor="pointer"
    />
  )
}

export default CommentsAvatar
