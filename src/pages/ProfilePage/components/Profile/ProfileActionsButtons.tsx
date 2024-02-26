import { useNavigate } from "react-router-dom"

import { Button, Flex, useMediaQuery } from "@chakra-ui/react"

import { handleEditProfile, handleNewProject } from "./Profile.controller"

const ProfileActionsButtons = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const navigate = useNavigate()

  return (
    <Flex
      direction={isLargerThan1200 ? "column" : "row"}
      gap={3}
      mt="1rem">
      <Button
        w="11rem"
        h="3.5rem"
        fontSize="1.3rem"
        color="default"
        bg="blue.100"
        borderRadius="10px"
        _hover={{ bg: "blue.100" }}
        onClick={() => handleNewProject(navigate)}>
        새 프로젝트
      </Button>
      <Button
        w="11rem"
        h="3.5rem"
        fontSize="1.3rem"
        color="default"
        bg="blue.100"
        borderRadius="10px"
        _hover={{ bg: "blue.100" }}
        onClick={() => handleEditProfile(navigate)}>
        프로필 수정
      </Button>
    </Flex>
  )
}

export default ProfileActionsButtons
