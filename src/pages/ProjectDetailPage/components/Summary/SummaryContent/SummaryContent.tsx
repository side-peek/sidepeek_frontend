import { Flex } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"

import SummaryLink from "./SummaryLink"
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
      w="100%">
      <SummaryLink
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
