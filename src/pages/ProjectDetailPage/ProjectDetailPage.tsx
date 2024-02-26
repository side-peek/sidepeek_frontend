import { useParams } from "react-router-dom"

import ProjectDetailSummary from "./components/ProjectDetailSummary"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))
  if (!data) {
    return
  }
  return <ProjectDetailSummary projects={data.projects} />
}

export default ProjectDetailPage
