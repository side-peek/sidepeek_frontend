import { Box, Flex } from "@chakra-ui/react"

import Bar from "./components/Bar"
import ProjectsView from "./components/ProjectsView"

const ProfilePage = () => {
  return (
    <Box height="100vh">
      <Box
        bg="blue.100"
        h="coverHeight"
        position="relative"
      />
      <Flex
        width="80%"
        margin="auto">
        <Box
          width="36rem"
          zIndex={999}
          bg="red">
          <Bar />
        </Box>
        <Box
          width="80%"
          bg="blue">
          <ProjectsView />
        </Box>
      </Flex>
    </Box>
  )
}

export default ProfilePage
