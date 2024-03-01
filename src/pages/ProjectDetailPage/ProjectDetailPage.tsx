import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

import ProjectDetailSummary from "./components/ProjectDetailSummary"
import ProjectDetailTabList from "./components/ProjectDetailTabList"
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
      <ProjectDetailTabList projectDetailInfo={projectDetailInfo} />
    </>
  )
}

export default ProjectDetailPage
