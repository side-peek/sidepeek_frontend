import ProjectDetailSummary from "./components/ProjectDetailSummary"
import useProjectDetail from "./hooks/query/useProjectDetail"

const ProjectDetailPage = () => {
  const { data } = useProjectDetail()
  if (!data) {
    return
  }
  return <ProjectDetailSummary projects={data.projects} />
}

export default ProjectDetailPage
