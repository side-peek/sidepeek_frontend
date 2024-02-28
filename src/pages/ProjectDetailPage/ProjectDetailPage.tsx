import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

import ProjectDetailTabList from "./components/ProjectDetailTabList"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))

  if (!data) {
    return <Center>Loading...</Center>
  }

  return <ProjectDetailTabList projects={data.projects[0]} />
}

export default ProjectDetailPage
