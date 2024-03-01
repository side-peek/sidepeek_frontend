import { Box, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTextProps {
  overview: string
}
const ProjectDetailSummaryText = ({
  overview,
}: ProjectDetailSummaryTextProps) => {
  return (
    <Box w="90%">
      <Text fontSize="xl">{overview}</Text>
    </Box>
  )
}

export default ProjectDetailSummaryText
