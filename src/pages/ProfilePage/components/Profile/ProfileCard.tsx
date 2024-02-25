import { Avatar, Text, VStack } from "@chakra-ui/react"

interface ProfileCardProps {
  profileImageUrl?: string
  nickname?: string
  career?: string
}

const ProfileCard = ({
  profileImageUrl = "https://bit.ly/broken-link",
  nickname,
  career,
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
    </VStack>
  )
}

export default ProfileCard
