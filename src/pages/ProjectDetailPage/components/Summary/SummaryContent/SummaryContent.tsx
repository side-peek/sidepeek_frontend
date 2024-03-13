import { Flex, useMediaQuery } from "@chakra-ui/react"
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
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Flex
      justifyContent={isLargerThan1200 ? "space-between" : "center"}
      align="stretch"
      w="100%">
      {isLargerThan1200 && (
        <SummaryLeft
          {...{
            deployUrl,
            githubUrl,
            overview,
          }}
        />
      )}
      <SummaryRight overviewImageUrl={overviewImageUrl} />
    </Flex>
  )
}

export default SummaryContent
