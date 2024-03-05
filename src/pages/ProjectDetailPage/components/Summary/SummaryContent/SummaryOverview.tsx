import { Box, Text } from "@chakra-ui/react"

interface SummaryOverviewProps {
  overview: string
}
const SummaryOverview = ({ overview }: SummaryOverviewProps) => {
  return (
    <Box w="90%">
      <Text fontSize="xl">{overview}</Text>
    </Box>
  )
}

export default SummaryOverview
