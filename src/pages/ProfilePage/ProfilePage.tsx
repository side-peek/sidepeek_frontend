import { Box } from "@chakra-ui/react"

import Bar from "./components/Bar"
import Projects from "./components/Projects"

const ProfilePage = () => {
  return (
    <Box height="100vh">
      <Box
        bg="blue.100"
        h="coverHeight"
        position="relative"
      />
      <Box>
        <Box
          width="80%"
          margin="auto">
          <Bar />
          <Projects />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
