import { useParams } from "react-router-dom"

import { Box, Center } from "@chakra-ui/layout"

import ProjectDetailMemberInfo from "./components/ProjectDetailMemberInfo/ProjectDetailMemberInfo"
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
      <ProjectDetailMemberInfo members={data.projects.members} />
    </Box>
  )
}

export default ProjectDetailPage
