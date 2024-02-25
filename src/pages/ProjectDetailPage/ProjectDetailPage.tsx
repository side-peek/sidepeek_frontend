import { useParams } from "react-router-dom"

import ProjectDetailDescription from "./components/ProjectDetailDescription"
import useProjectDetail from "./hooks/query/useProjectDetail"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetail(Number(projectId))
  if (!data) {
    return
  }

  return <ProjectDetailDescription projects={data.projects[0]} />
}

export default ProjectDetailPage
