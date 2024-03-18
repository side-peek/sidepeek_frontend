import { Box, Center, Flex, useMediaQuery } from "@chakra-ui/react"

import Comments from "./components/Comments/Comments"
import { withProjectId } from "./components/Comments/Hoc/withProjectId"
import { ProjectIdProps } from "./components/Comments/Hoc/withProjectId"
import Content from "./components/Content/Content"
import Summary from "./components/Summary/Summary"
import { useProjectDetailQuery } from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = ({ projectId }: ProjectIdProps) => {
  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return (
    <Box w="100%">
      <Summary projectDetailInfo={projectDetailInfo} />
      <Flex
        maxW="128rem"
        w="100%"
        margin="0 auto"
        p={isLargerThan768 ? "5rem" : "1.5rem"}
        gap="10rem"
        direction="column">
        <Content projectDetailInfo={projectDetailInfo} />
        <Comments comments={projectDetailInfo.comments}></Comments>
      </Flex>
    </Box>
  )
}

export default withProjectId(ProjectDetailPage)
