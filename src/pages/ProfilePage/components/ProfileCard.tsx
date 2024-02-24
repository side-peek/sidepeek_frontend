import { Avatar, Text, VStack } from "@chakra-ui/react"

interface ProfileCardProps {
  profileImageUrl?: string
  nickName?: string
  career?: string
}

const ProfileCard = ({
  profileImageUrl = "https://bit.ly/broken-link",
  nickName,
  career,
}: ProfileCardProps) => {
  return (
    <VStack>
      <Avatar
        //   size="2xl"
        w="12rem"
        h="12rem"
        src={profileImageUrl}></Avatar>
      <Text
        mt="4"
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        {nickName}
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
