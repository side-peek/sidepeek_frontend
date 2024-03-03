import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

import ProjectDetailComment from "./components/ProjectDetailComment/ProjectDetailComment"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))

  if (!data) {
    return <Center>Loading...</Center>
  }

  return <ProjectDetailComment comments={data.projects.comments} />
}

export default ProjectDetailPage
