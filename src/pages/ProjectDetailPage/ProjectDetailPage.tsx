import { useParams } from "react-router-dom"

import { Center } from "@chakra-ui/layout"

import ProjectDetailMembers from "./components/ProjectDetailMembers/ProjectDetailMembers"
// import ProjectDetailTabList from "./components/ProjectDetailTabList"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))

  if (!data) {
    return <Center>Loading...</Center>
  }

  return (
    <Center mt="10rem">
      {/* <ProjectDetailTabList projects={data.projects[0]} /> */}
      <ProjectDetailMembers members={data.projects[0].members} />
    </Center>
  )
}

export default ProjectDetailPage
