import { Flex, useMediaQuery } from "@chakra-ui/react"

import SummaryLink from "./SummaryLink"
import SummaryOverview from "./SummaryOverview"

interface SummaryLeftProps {
  deployUrl: string
  githubUrl: string
  overview: string
}
const SummaryLeft = ({ deployUrl, githubUrl, overview }: SummaryLeftProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  console.log(isLargerThan1200)

  return (
    <Flex
      flexDirection="column"
      justifyContent={isLargerThan1200 ? "space-between" : "center"}>
      {isLargerThan1200 && (
        <>
          <SummaryOverview overview={overview} />
          <SummaryLink
            {...{
              deployUrl,
              githubUrl,
            }}
          />
        </>
      )}
    </Flex>
  )
}

export default SummaryLeft
