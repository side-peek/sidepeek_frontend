import { Avatar, Text, VStack } from "@chakra-ui/react"

import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import ProfileActionsButtons from "./ProfileActionsButtons"

interface ProfileCardProps extends ProfileActionsButtonsProps, UserIdProps {
  profileImageUrl?: string
  nickname?: string
  career?: string | null
  job?: string | null
}

const ProfileCard = ({
  profileImageUrl = "https://bit.ly/broken-link",
  nickname,
  career,
  job,
  handleNewProject,
  handleEditProfile,
  isMe,
}: ProfileCardProps) => {
  return (
    <VStack>
      <Avatar
        w="12rem"
        h="12rem"
        src={profileImageUrl}></Avatar>
      <Text
        mt="4"
        mb="0.5rem"
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        {nickname}
      </Text>
      {career && (
        <Text
          mt="-3"
          fontSize="xl">
          {career}
        </Text>
      )}
      {job && (
        <Text
          mt="-3"
          fontSize="xl">
          {job}
        </Text>
      )}
      {isMe && (
        <ProfileActionsButtons {...{ handleNewProject, handleEditProfile }} />
      )}
    </VStack>
  )
}

export default withUserId(ProfileCard)
