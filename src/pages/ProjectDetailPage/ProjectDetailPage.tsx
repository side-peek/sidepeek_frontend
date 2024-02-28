import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/react"

import ProjectDetailSummary from "./components/ProjectDetailSummary"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))
  if (!data) {
    return <Center>Loading</Center>
  }
  return <ProjectDetailSummary projects={data.projects} />
}

export default ProjectDetailPage
