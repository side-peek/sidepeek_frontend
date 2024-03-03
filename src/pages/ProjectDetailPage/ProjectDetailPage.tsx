import { useParams } from "react-router-dom"

import { Box, Center } from "@chakra-ui/layout"

import ProjectDetailMembers from "./components/ProjectDetailMemberList/ProjectDetailMemberList"
// import ProjectDetailTabList from "./components/ProjectDetailTabList"
import useProjectDetailQuery from "./hooks/queries/useProjectDetailQuery"

const ProjectDetailPage = () => {
  const { projectId } = useParams()

  const { data } = useProjectDetailQuery(Number(projectId))

  if (!data) {
    return <Center>Loading...</Center>
  }

  return (
    <Box
      maxW="128rem"
      w="100%"
      margin="0 auto"
      mt="10rem"
      px="5rem">
      {/* <ProjectDetailTabList projects={data.projects[0]} /> */}
      <ProjectDetailMembers members={data.projects[0].members} />
    </Box>
  )
}

export default ProjectDetailPage
