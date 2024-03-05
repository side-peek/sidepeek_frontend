import { useParams } from "react-router-dom"

import { Center, Flex } from "@chakra-ui/layout"

import ProjectDetailContent from "./components/ProjectDetailContent/ProjectDetailContent"
import ProjectDetailSummary from "./components/ProjectDetailSummary/ProjectDetailSummary"
import ProjectDetailTabList from "./components/ProjectDetailTabList/ProjectDetailTabList"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { projectDetailInfo } = useProjectDetailQuery(Number(projectId))

  if (!projectDetailInfo) {
    return <Center>Loading...</Center>
  }

  return (
    <>
      <ProjectDetailSummary projectDetailInfo={projectDetailInfo} />
      <Flex
        direction="column"
        gap="5rem"
        maxW="128rem"
        margin="0 auto"
        px="5rem">
        <ProjectDetailContent projectDetailInfo={projectDetailInfo} />
        <ProjectDetailTabList projectDetailInfo={projectDetailInfo} />
      </Flex>
    </>
  )
}

export default ProjectDetailPage
