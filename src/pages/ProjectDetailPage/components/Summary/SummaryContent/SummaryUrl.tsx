import { Flex } from "@chakra-ui/react"

import SummaryLink from "./SummaryLink"
import SummaryOverview from "./SummaryOverview"

interface SummaryUrlProps {
  deployUrl: string
  githubUrl: string
  overview: string
}
const SummaryUrl = ({ deployUrl, githubUrl, overview }: SummaryUrlProps) => {
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

export default SummaryUrl
