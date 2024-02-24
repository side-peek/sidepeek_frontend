import { Box, Flex, VStack, useMediaQuery } from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import { getUserDetail } from "@/api/user/getUserDetail"

import Bar from "./components/Bar"
import ProfileCard from "./components/ProfileCard"
import ProjectsView from "./components/ProjectsView"

const ProfilePage = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  const { isLoading, data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserDetail({ userId: 1 }),
    gcTime: 0,
  })

  const {
    nickname,
    profileImageUrl,
    career,
    introduction,
    githubUrl,
    blogUrl,
    techStacks,
  } = data?.userInfo || {}

  if (isLoading)
    return (
      <Box
        w="100vw"
        h="100vh"
        bg="#909090">
        Loading...
      </Box>
    )
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
              <Bar
                nickName={nickname}
                profileImageUrl={profileImageUrl}
                career={career}
                introduction={introduction}
                githubUrl={githubUrl}
                blogUrl={blogUrl}
                techStacks={techStacks}
              />
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
              nickName={nickname}
              profileImageUrl={profileImageUrl}
              career={career}
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
