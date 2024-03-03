import { IconButton, IconButtonProps } from "@chakra-ui/react"

interface ProjectDetailCommentIcon extends IconButtonProps {}
const ProjectDetailCommentIcon = ({ ...props }: ProjectDetailCommentIcon) => {
  return (
    <IconButton
      {...props}
      background="none"
      _hover={{ background: "none", opacity: "0.5" }}
      _active={{ background: "none" }}
      fontSize="3xl"
    />
  )
}

export default ProjectDetailCommentIcon
