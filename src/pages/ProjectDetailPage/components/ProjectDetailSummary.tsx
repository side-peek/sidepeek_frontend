import { Center, Flex } from "@chakra-ui/react"
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
    thumbnailUrl,
    viewCount,
    likeCount,
    commentCount,
    overview,
  } = projects[0]
  return (
    <>
      <Flex
        maxW="128rem"
        bg="#f5f5f5"
        w="100%"
        h="53rem"
        gap="15rem"
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
            justifyContent="center"
            alignItems="center"
            gap="5rem">
            <ProjectDetailSummaryTitle
              name={name}
              subName={subName}
            />
            <ProjectDetailSummaryContent
              overview={overview}
              deployUrl={deployUrl}
              githubUrl={githubUrl}
              thumbnailUrl={thumbnailUrl}
            />
          </Center>
        </Flex>
      </Flex>
    </>
  )
}

export default ProjectDetailSummary
