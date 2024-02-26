import { Button, ButtonProps } from "@chakra-ui/react"

interface ProjectDetailSummaryLinkButtonProps extends ButtonProps {
  linkName: string
}

const ProjectDetailSummaryLinkButton = ({
  linkName,
  ...props
}: ProjectDetailSummaryLinkButtonProps) => {
  return (
    <Button
      borderRadius="2rem"
      size="lg"
      color="#fff"
      fontSize="xl"
      p="2.2rem 1.5rem"
      _hover={{ opacity: "0.5" }}
      {...props}>
      {linkName}
    </Button>
  )
}

export default ProjectDetailSummaryLinkButton
