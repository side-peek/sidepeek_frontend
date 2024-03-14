import { Box, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryOverviewProps {
  overview: string
}
const SummaryOverview = ({ overview }: SummaryOverviewProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Box w="90%">
      <Text fontSize={isLargerThan1200 ? "xl" : "lg"}>{overview}</Text>
    </Box>
  )
}
export default SummaryOverview
