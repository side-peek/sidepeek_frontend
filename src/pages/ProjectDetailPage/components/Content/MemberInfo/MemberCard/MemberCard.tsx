import { Avatar, Flex, Text } from "@chakra-ui/react"

interface MemberCardProps {
  profileImageUrl: string
  nickname: string
}

const MemberCard = ({ profileImageUrl, nickname }: MemberCardProps) => {
  return (
    <Flex
      gap="1rem"
      direction="column">
      <Flex
        gap="1rem"
        direction="column"
        alignItems="center">
        <Avatar
          src={profileImageUrl}
          width="6rem"
          height="6rem"
        />
        <Text fontSize="xl">{nickname}</Text>
      </Flex>
    </Flex>
  )
}

export default MemberCard
