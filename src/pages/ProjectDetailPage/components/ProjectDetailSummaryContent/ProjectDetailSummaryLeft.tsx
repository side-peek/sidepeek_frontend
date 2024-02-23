import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryLink from "./ProjectDetailSummaryLink"
import ProjectDetailSummaryText from "./ProjectDetailSummaryText"

const ProjectDetailSummaryLeft = () => {
  return (
    <Flex
      flexDirection="column"
      gap="5rem">
      <ProjectDetailSummaryText />
      <ProjectDetailSummaryLink />
    </Flex>
  )
}

export default ProjectDetailSummaryLeft
