import { Box, Center, Flex } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import ProjectDetailSummaryContent from "./ProjectDetailSummaryContent/ProjectDetailSummaryContent"
import ProjectDetailSummaryTitle from "./ProjectDetailSummaryTitle/ProjectDetailSummaryTitle"
import ProjectDetailSummaryTop from "./ProjectDetailSummaryTop/ProjectDetailSummaryTop"

const ProjectDetailSummary = ({
  projectDetailInfo,
}: getProjectDetailResponseType) => {
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
  } = projectDetailInfo
  return (
    <Box bg="whiteSmoke">
      <Flex
        maxW="128rem"
        flexDirection="column"
        m="0 auto"
        p="2rem">
        <Flex flexDirection="column">
          <ProjectDetailSummaryTop
            {...{
              likeCount,
              viewCount,
              commentCount,
            }}
          />

          <Center
            flexDirection="column"
            gap="5rem">
            <ProjectDetailSummaryTitle
              {...{
                name,
                subName,
              }}
            />
            <ProjectDetailSummaryContent
              {...{
                overviewImageUrl,
                overview,
                deployUrl,
                githubUrl,
              }}
            />
          </Center>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProjectDetailSummary
