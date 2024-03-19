import { Flex, useMediaQuery } from "@chakra-ui/react"

import StyledProfileActionButton from "@pages/ProfilePage/styles/StyledProfileActionButton"
import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

const ProfileActionsButtons = ({
  handleNewProject,
  handleEditProfile,
}: ProfileActionsButtonsProps) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  return (
    <Flex
      direction={isLargerThan1200 ? "column" : "row"}
      gap={3}
      mt="1rem">
      <StyledProfileActionButton onClick={handleNewProject}>
        새 프로젝트
      </StyledProfileActionButton>
      <StyledProfileActionButton onClick={handleEditProfile}>
        프로필 수정
      </StyledProfileActionButton>
    </Flex>
  )
}

export default ProfileActionsButtons
