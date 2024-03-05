import { Flex } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"

import ProjectDetailSummaryLeft from "./ProjectDetailSummaryLeft"
import ProjectDetailSummaryRight from "./ProjectDetailSummaryRight"

interface ProjectDetailSummaryContentProps {
  deployUrl: string
  githubUrl: string
  overviewImageUrl: ProjectOverViewUrl[]
  overview: string
}

const ProjectDetailSummaryContent = ({
  deployUrl,
  githubUrl,
  overviewImageUrl,
  overview,
}: ProjectDetailSummaryContentProps) => {
  return (
    <Flex
      justifyContent="space-between"
      w="100%">
      <ProjectDetailSummaryLeft
        {...{
          deployUrl,
          githubUrl,
          overview,
        }}
      />
      <ProjectDetailSummaryRight overviewImageUrl={overviewImageUrl} />
    </Flex>
  )
}

export default ProjectDetailSummaryContent
