import { Stack, useMediaQuery } from "@chakra-ui/react"

import SummaryLink from "./SummaryLink"
import SummaryOverview from "./SummaryOverview"

interface SummaryLeftProps {
  deployUrl: string
  githubUrl: string
  overview: string
}
const SummaryLeft = ({ deployUrl, githubUrl, overview }: SummaryLeftProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Stack
      gap="2rem"
      w={isLargerThan1200 ? "50%" : "100%"}
      align={isLargerThan1200 ? "flex-start" : "center"}
      justifyContent={isLargerThan1200 ? "space-between" : "center"}>
      <SummaryOverview overview={overview} />
      <SummaryLink
        {...{
          deployUrl,
          githubUrl,
        }}
      />
    </Stack>
  )
}
export default SummaryLeft
