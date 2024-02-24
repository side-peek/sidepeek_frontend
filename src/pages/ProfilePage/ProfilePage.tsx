import { Box, Flex, useMediaQuery } from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import { getUserDetail } from "@/api/user/getUserDetail"

import LargeScreenProfile from "./LargeScreenProfile/LargeScreenProfileView"
import SmallScreenProfile from "./SmallScreenProfile/SmallScreenProfileView"

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
          <LargeScreenProfile
            {...{
              nickname,
              profileImageUrl,
              career,
              introduction,
              githubUrl,
              blogUrl,
              techStacks,
            }}
          />
        ) : (
          <SmallScreenProfile {...{ nickname, profileImageUrl, career }} />
        )}
      </Flex>
    </Box>
  )
}

export default ProfilePage
