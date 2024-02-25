import { Flex, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTextProps {
  overview: string
}
const ProjectDetailSummaryText = ({
  overview,
}: ProjectDetailSummaryTextProps) => {
  return (
    <Flex
      justifyContent="center"
      w="90%">
      <Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          w="80%"
          minHeight="20rem">
          <Text fontSize="xl">{overview}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProjectDetailSummaryText
