import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

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
      <ProjectDetailContent projectDetailInfo={projectDetailInfo} />
      <ProjectDetailTabList projectDetailInfo={projectDetailInfo} />
    </>
  )
}

export default ProjectDetailPage
