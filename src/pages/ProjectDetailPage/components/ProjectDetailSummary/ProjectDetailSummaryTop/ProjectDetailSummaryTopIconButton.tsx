import { Flex, IconButton, IconButtonProps, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTopIconButtonProps extends IconButtonProps {
  count?: number
}

const ProjectDetailSummaryTopIconButton = ({
  count,
  ...props
}: ProjectDetailSummaryTopIconButtonProps) => {
  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor="pointer"
      _hover={{ opacity: "0.5" }}>
      <IconButton
        background="none"
        _hover={{ background: "none" }}
        {...props}
      />
      <Text fontSize="xl">{count}</Text>
    </Flex>
  )
}

export default ProjectDetailSummaryTopIconButton
