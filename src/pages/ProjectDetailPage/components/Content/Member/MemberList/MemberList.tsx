import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import AvatarCard from "@components/AvatarCard/AvatarCard"

interface MemberListProps {
  members: Member[]
  category: string
}

const MemberList = ({ category, members }: MemberListProps) => {
  return (
    <Flex
      direction="column"
      gap="1rem"
      alignItems="center"
      borderRadius="1rem"
      border="1px"
      p="2rem"
      borderColor="grey.400">
      <Flex
        gap="2rem"
        p="1rem"
        alignItems="center">
        {members.map((member) => (
          <AvatarCard
            key={member.id}
            flexDir="column"
            border="none"
            gap="2rem">
            <AvatarCard.Image
              src={member.userSummary.profileImageUrl ?? undefined}
            />
            <AvatarCard.Content
              text={member.userSummary.nickname}
              fontSize="2rem"
              display="block"
            />
          </AvatarCard>
        ))}
      </Flex>
      <Text
        fontFamily="SCDream_Bold"
        fontSize="xl">
        {category}
      </Text>
    </Flex>
  )
}

export default MemberList
