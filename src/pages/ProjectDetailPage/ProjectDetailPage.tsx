import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"

import Content from "./components/Content/Content"
import MemberInfo from "./components/MemberInfo/MemberInfo"
import Summary from "./components/Summary/Summary"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return (
    <Flex
      maxW="128rem"
      w="100%"
      margin="0 auto"
      mt="10rem"
      px="5rem"
      gap="10rem"
      direction="column">
      <Summary projectDetailInfo={projectDetailInfo} />
      <MemberInfo members={projectDetailInfo.members} />
      <Content projectDetailInfo={projectDetailInfo} />
    </Flex>
  )
}

export default ProjectDetailPage
