import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"

import Content from "./components/Content/Content"
import Summary from "./components/Summary/Summary"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return (
    <>
      <Summary projectDetailInfo={projectDetailInfo} />
      <Flex
        maxW="128rem"
        w="100%"
        margin="0 auto"
        p="5rem"
        gap="10rem"
        direction="column">
        <Content projectDetailInfo={projectDetailInfo} />
      </Flex>
    </>
  )
}

export default ProjectDetailPage
