import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryLeft from "./ProjectDetailSummaryLeft"
import ProjectDetailSummaryRight from "./ProjectDetailSummaryRight"

interface ProjectDetailSummaryContentProps {
  deployUrl: string
  githubUrl: string
  thumbnailUrl: string
  overview: string
}
const ProjectDetailSummaryContent = ({
  deployUrl,
  githubUrl,
  thumbnailUrl,
  overview,
}: ProjectDetailSummaryContentProps) => {
  return (
    <Flex
      justifyContent="space-between"
      width="90%">
      <ProjectDetailSummaryLeft
        deployUrl={deployUrl}
        githubUrl={githubUrl}
        overview={overview}
      />
      <ProjectDetailSummaryRight thumbnailUrl={thumbnailUrl} />
    </Flex>
  )
}

export default ProjectDetailSummaryContent
