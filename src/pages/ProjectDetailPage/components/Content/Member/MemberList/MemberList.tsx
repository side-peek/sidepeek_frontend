import { Flex, Text } from "@chakra-ui/react"
import { UserSummary } from "api-models"

import AvatarCard from "@components/AvatarCard/AvatarCard"

interface MemberListProps {
  memberList: UserSummary[]
  category: string
}

const MemberList = ({ category, memberList }: MemberListProps) => {
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
        flexWrap="wrap"
        gap="1rem"
        p="1rem"
        alignItems="center">
        {memberList.map(({ id, profileImageUrl, nickname }) => (
          <AvatarCard
            key={`${id}-${nickname}`}
            flexDir="column"
            border="none"
            gap="2rem">
            <AvatarCard.Image src={profileImageUrl ?? undefined} />
            <AvatarCard.Content
              text={nickname}
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
