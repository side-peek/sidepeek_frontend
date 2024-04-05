import { Box, Fade, Flex } from "@chakra-ui/react"

import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"

import { ProjectDetailPageMetaData } from "../../components/ MetaData/MetaData"
import Comments from "./components/Comments/Comments"
import Content from "./components/Content/Content"
import { ProjectIdProps, withProjectId } from "./components/Hoc/withProjectId"
import Summary from "./components/Summary/Summary"
import { useProjectDetailQuery } from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = ({ projectId }: ProjectIdProps) => {
  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <FullScreenSpinner />
  }

  return (
    <Fade in={true}>
      <ProjectDetailPageMetaData />
      <Box w="100%">
        <Summary projectDetailInfo={projectDetailInfo} />
        <Flex
          maxW="128rem"
          w="100%"
          margin="0 auto"
          p="5rem"
          gap="10rem"
          direction="column">
          <Content projectDetailInfo={projectDetailInfo} />
          <Comments comments={projectDetailInfo.comments}></Comments>
        </Flex>
      </Box>
    </Fade>
  )
}

export default withProjectId(ProjectDetailPage)
