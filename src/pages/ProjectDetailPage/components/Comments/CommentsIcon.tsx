import { IconButton, IconButtonProps } from "@chakra-ui/react"

interface CommentsIconProps extends IconButtonProps {}
const CommentsIcon = ({ ...props }: CommentsIconProps) => {
  return (
    <IconButton
      {...props}
      background="none"
      _hover={{ background: "none", opacity: "0.5" }}
      _active={{ background: "none" }}
      fontSize="2xl"
    />
  )
}

export default CommentsIcon
