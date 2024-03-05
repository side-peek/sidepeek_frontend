import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import combinateCategory from "@pages/ProjectDetailPage/utils/combinateCategory"

import MemberList from "./MemberList/MemberList"

interface MemberInfoProps {
  members: Member[]
}

const MemberInfo = ({ members }: MemberInfoProps) => {
  const groupedByCategory = combinateCategory(members)
  return (
    <Flex
      direction="column"
      gap="2rem">
      <Text
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        팀원
      </Text>
      <Flex gap="1rem">
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
