import { Box, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryOverviewProps {
  overview: string
}
const SummaryOverview = ({ overview }: SummaryOverviewProps) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Box w="90%">
      <Text
        fontSize={isLargerThan768 ? "2xl" : "xl"}
        textAlign={isLargerThan1200 ? "left" : "center"}>
        {overview}
      </Text>
    </Box>
  )
}
export default SummaryOverview
