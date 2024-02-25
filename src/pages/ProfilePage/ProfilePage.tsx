import { Box, Flex, useMediaQuery } from "@chakra-ui/react"

import LargeScreenView from "./LargeScreenView/LargeScreen.view"
import SmallScreenView from "./SmallScreenView/SmallScreen.view"
import { useUserInfo } from "./components/Profile/Profile.model"

const ProfilePage = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  const { isLoading, data } = useUserInfo({ userId: 1 })

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
          <LargeScreenView
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
          <SmallScreenView {...{ nickname, profileImageUrl, career }} />
        )}
      </Flex>
    </Box>
  )
}

export default ProfilePage
