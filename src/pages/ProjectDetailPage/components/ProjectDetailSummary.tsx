import { Box, Center, Flex } from "@chakra-ui/react"
import { Project } from "api-models"

import ProjectDetailSummaryContent from "./ProjectDetailSummaryContent/ProjectDetailSummaryContent"
import ProjectDetailSummaryTitle from "./ProjectDetailSummaryTitle/ProjectDetailSummaryTitle"
import ProjectDetailSummaryTop from "./ProjectDetailSummaryTop/ProjectDetailSummaryTop"

interface ProjectDetailSummaryProps {
  projects: Project[]
}
const ProjectDetailSummary = ({ projects }: ProjectDetailSummaryProps) => {
  const {
    deployUrl,
    githubUrl,
    name,
    subName,
    overviewImageUrl,
    viewCount,
    likeCount,
    commentCount,
    overview,
  } = projects[0]
  return (
    <Box bg="#f5f5f5">
      <Flex
        maxW="128rem"
        flexDirection="column"
        m="0 auto"
        p="2rem">
        <Flex flexDirection="column">
          <ProjectDetailSummaryTop
            likeCount={likeCount}
            viewCount={viewCount}
            commentCount={commentCount}
          />

          <Center
            flexDirection="column"
            gap="5rem">
            <ProjectDetailSummaryTitle
              name={name}
              subName={subName}
            />
            <ProjectDetailSummaryContent
              overviewImageUrl={overviewImageUrl}
              overview={overview}
              deployUrl={deployUrl}
              githubUrl={githubUrl}
            />
          </Center>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProjectDetailSummary
