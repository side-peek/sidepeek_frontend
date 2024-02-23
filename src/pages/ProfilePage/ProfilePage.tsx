import { Box, Flex, VStack, useMediaQuery } from "@chakra-ui/react"

import Bar from "./components/Bar"
import ProfileCard from "./components/ProfileCard"
import ProjectsView from "./components/ProjectsView"

const ProfilePage = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

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
        {isLargerThan1200 ? (
          <>
            <Box
              minW="38rem"
              zIndex={999}
              // bg="red"
            >
              <Bar />
            </Box>
            <Box
              width="80%"

              // bg="blue"
            >
              <ProjectsView />
            </Box>
          </>
        ) : (
          <VStack
            w="100%"
            mt="-6rem">
            <ProfileCard
              profileImageUrl="https://bit.ly/broken-link"
              nickName="테스트"
              year={2}
            />

            <Box
              width="100%"
              // bg="blue"
            >
              <ProjectsView />
            </Box>
          </VStack>
        )}

        {/* <Box
          width={isLargerThan1200 ? "80%" : "100%"}
          mt={isLargerThan1200 ? "0" : "20rem"}
          // bg="blue"
        >
          <ProjectsView />
        </Box> */}
      </Flex>
    </Box>
  )
}

export default ProfilePage
