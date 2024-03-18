import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import membersCategory from "@pages/ProjectDetailPage/utils/membersCategory"

import MemberList from "./MemberList/MemberList"

interface MemberInfoProps {
  members: Member[]
}

const MemberInfo = ({ members }: MemberInfoProps) => {
  const groupedByCategory = membersCategory(members)
  return (
    <Flex
      direction="column"
      gap="2rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        팀원
      </Text>
      <Flex
        gap="1rem"
        flexWrap="wrap">
        {groupedByCategory.map(([category, members]) => (
          <MemberList
            key={category}
            category={category}
            members={members}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default MemberInfo
