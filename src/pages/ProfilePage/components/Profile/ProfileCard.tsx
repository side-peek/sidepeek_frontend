import { Avatar, Text, VStack } from "@chakra-ui/react"

import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

import ProfileActionsButtons from "./ProfileActionsButtons"

interface ProfileCardProps extends ProfileActionsButtonsProps {
  profileImageUrl?: string
  nickname?: string
  career?: string | null
}

const ProfileCard = ({
  profileImageUrl = "https://bit.ly/broken-link",
  nickname,
  career,
  handleNewProject,
  handleEditProfile,
}: ProfileCardProps) => {
  return (
    <VStack>
      <Avatar
        w="12rem"
        h="12rem"
        src={profileImageUrl}></Avatar>
      <Text
        mt="4"
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        {nickname}
      </Text>
      <Text
        mt="-3"
        fontSize="2xl">
        {career} 개발자
      </Text>
      <ProfileActionsButtons {...{ handleNewProject, handleEditProfile }} />
    </VStack>
  )
}

export default ProfileCard
