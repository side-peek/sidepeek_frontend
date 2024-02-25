import { useParams } from "react-router-dom"

import ProjectDetailSummary from "./components/ProjectDetailSummary"
import useProjectDetail from "./hooks/query/useProjectDetail"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetail(Number(projectId))
  if (!data) {
    return
  }
  return <ProjectDetailSummary projects={data.projects} />
}

export default ProjectDetailPage
