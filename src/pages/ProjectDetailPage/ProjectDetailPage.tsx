import { useParams } from "react-router-dom"

import ProjectDetailTabList from "./components/ProjectDetailTabList"
import useProjectDetail from "./hooks/query/useProjectDetail"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetail(Number(projectId))
  if (!data) {
    return
  }

  return <ProjectDetailTabList projects={data.projects[0]} />
}

export default ProjectDetailPage
