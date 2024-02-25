import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryLink from "./ProjectDetailSummaryLink"
import ProjectDetailSummaryText from "./ProjectDetailSummaryText"

interface ProjectDetailSummaryLeftProps {
  deployUrl: string
  githubUrl: string
  overview: string
}
const ProjectDetailSummaryLeft = ({
  deployUrl,
  githubUrl,
  overview,
}: ProjectDetailSummaryLeftProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between">
      <ProjectDetailSummaryText overview={overview} />
      <ProjectDetailSummaryLink
        deployUrl={deployUrl}
        githubUrl={githubUrl}
      />
    </Flex>
  )
}

export default ProjectDetailSummaryLeft
