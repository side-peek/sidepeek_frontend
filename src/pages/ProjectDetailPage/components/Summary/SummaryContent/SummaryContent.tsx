import { Flex } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"

import SummaryLeft from "./SummaryLeft"
import SummaryRight from "./SummaryRight"

interface SummaryContentProps {
  deployUrl: string
  githubUrl: string
  overviewImageUrl: ProjectOverViewUrl[]
  overview: string
}

const SummaryContent = ({
  deployUrl,
  githubUrl,
  overviewImageUrl,
  overview,
}: SummaryContentProps) => {
  return (
    <Flex
      justifyContent="space-between"
      align="stretch"
      w="100%">
      <SummaryLeft
        {...{
          deployUrl,
          githubUrl,
          overview,
        }}
      />
      <SummaryRight overviewImageUrl={overviewImageUrl} />
    </Flex>
  )
}

export default SummaryContent
