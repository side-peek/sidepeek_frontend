import { Box, Stack } from "@chakra-ui/react"

import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"

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
    <Box w="100%">
      <Summary projectDetailInfo={projectDetailInfo} />
      <Stack
        maxW="128rem"
        w="100%"
        margin="0 auto"
        p="5rem"
        spacing="10rem">
        <Content projectDetailInfo={projectDetailInfo} />
        <Comments comments={projectDetailInfo.comments}></Comments>
      </Stack>
    </Box>
  )
}

export default withProjectId(ProjectDetailPage)
