import { useNavigate } from "react-router-dom"

import { Flex, useMediaQuery } from "@chakra-ui/react"

import StyledButton from "@pages/ProfilePage/styles/StyledButton"

import { handleEditProfile, handleNewProject } from "./Profile.controller"

const ProfileActionsButtons = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const navigate = useNavigate()

  return (
    <Flex
      direction={isLargerThan1200 ? "column" : "row"}
      gap={3}
      mt="1rem">
      <StyledButton onClick={() => handleNewProject(navigate)}>
        새 프로젝트
      </StyledButton>
      <StyledButton onClick={() => handleEditProfile(navigate)}>
        프로필 수정
      </StyledButton>
    </Flex>
  )
}

export default ProfileActionsButtons
