import { useNavigate } from "react-router-dom"

import { Box, Flex, useMediaQuery } from "@chakra-ui/react"

import LargeScreenView from "@pages/ProfilePage/LargeScreenView/LargeScreen.view"
import SmallScreenView from "@pages/ProfilePage/SmallScreenView/SmallScreen.view"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import { useUserInfo } from "./Profile.model"

const ProfileController = ({ userId }: UserIdProps) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  const { data } = useUserInfo({ userId: Number(userId) })

  const navigate = useNavigate()
  const handleNewProject = () => {
    navigate("/project/edit")
  }
  const handleEditProfile = () => {
    navigate("/profile/edit")
  }

  if (!data)
    return (
      <Box
        w="100vw"
        h="100vh"
        bg="#909090">
        Loading...
      </Box>
    )

  const {
    nickname,
    profileImageUrl,
    career,
    job,
    introduction,
    githubUrl,
    blogUrl,
    techStacks,
  } = data

  return (
    <Box>
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
              job,
              introduction,
              githubUrl,
              blogUrl,
              techStacks,
              handleNewProject,
              handleEditProfile,
            }}
          />
        ) : (
          <SmallScreenView
            {...{
              nickname,
              profileImageUrl,
              career,
              job,
              handleNewProject,
              handleEditProfile,
            }}
          />
        )}
      </Flex>
    </Box>
  )
}

export default withUserId(ProfileController)
