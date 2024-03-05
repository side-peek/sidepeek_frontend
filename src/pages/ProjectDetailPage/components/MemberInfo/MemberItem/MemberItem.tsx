import { Avatar, Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

interface MemberItemProps {
  member: Member
}

const MemberItem = ({ member }: MemberItemProps) => {
  return (
    <Flex
      gap="1rem"
      direction="column">
      <Flex
        gap="1rem"
        direction="column"
        alignItems="center">
        <Avatar
          src={member.profileImageUrl}
          width="6rem"
          height="6rem"
        />
        <Text fontSize="xl">{member.nickname}</Text>
      </Flex>
    </Flex>
  )
}

export default MemberItem
