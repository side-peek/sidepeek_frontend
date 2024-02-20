import { Box } from "@chakra-ui/react"

import Bar from "./components/Bar"

const ProfilePage = () => {
  return (
    <>
      <Box position="relative">
        <Box
          bg="blue.100"
          h="coverHeight"></Box>
        <Box
          bg="grey.300"
          w="100%"
          h="100vh"></Box>
        <Bar></Bar>
      </Box>
    </>
  )
}

export default ProfilePage
