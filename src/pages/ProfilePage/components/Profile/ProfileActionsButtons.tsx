import { Flex, useMediaQuery } from "@chakra-ui/react"

import StyledButton from "@pages/ProfilePage/styles/StyledButton"
import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

const ProfileActionsButtons = ({
  handleNewProject,
  handleEditProfile,
}: ProfileActionsButtonsProps) => {
  // TODO: mediaQuery 값 계산 최상위 컴포넌트에서 하고 Props로 내려줄지 고민해보기
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  return (
    <Flex
      direction={isLargerThan1200 ? "column" : "row"}
      gap={3}
      mt="1rem">
      <StyledButton onClick={handleNewProject}>새 프로젝트</StyledButton>
      <StyledButton onClick={handleEditProfile}>프로필 수정</StyledButton>
    </Flex>
  )
}

export default ProfileActionsButtons
