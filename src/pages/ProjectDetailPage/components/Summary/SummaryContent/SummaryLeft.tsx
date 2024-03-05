import { Flex } from "@chakra-ui/react"

import SummaryLink from "./SummaryLink"
import SummaryOverview from "./SummaryOverview"

interface SummaryLeftProps {
  deployUrl: string
  githubUrl: string
  overview: string
}
const SummaryLeft = ({ deployUrl, githubUrl, overview }: SummaryLeftProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between">
      <SummaryOverview overview={overview} />
      <SummaryLink
        {...{
          deployUrl,
          githubUrl,
        }}
      />
    </Flex>
  )
}

export default SummaryLeft
