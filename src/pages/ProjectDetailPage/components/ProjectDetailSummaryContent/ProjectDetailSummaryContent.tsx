import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryLeft from "./ProjectDetailSummaryLeft"
import ProjectDetailSummaryRight from "./ProjectDetailSummaryRight"

const ProjectDetailSummaryContent = () => {
  return (
    <Flex
      justifyContent="space-between"
      width="90%">
      <ProjectDetailSummaryLeft />
      <ProjectDetailSummaryRight />
    </Flex>
  )
}

export default ProjectDetailSummaryContent
