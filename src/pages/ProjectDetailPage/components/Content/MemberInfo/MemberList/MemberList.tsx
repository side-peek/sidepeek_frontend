import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import MemberCard from "../MemberCard/MemberCard"

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
          <MemberCard
            member={member}
            key={member.id}
          />
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
