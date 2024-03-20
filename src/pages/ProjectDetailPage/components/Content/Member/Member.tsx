import { HStack, Stack, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import membersCategory from "@pages/ProjectDetailPage/utils/membersCategory"

import MemberList from "./MemberList/MemberList"

interface MemberInfoProps {
  members: Member[]
}

const MemberInfo = ({ members }: MemberInfoProps) => {
  const groupedByCategory = membersCategory(members)
  return (
    <Stack
      direction={groupedByCategory.length > 0 ? "column" : "row"}
      spacing="2rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        팀원
      </Text>
      <HStack
        spacing="1rem"
        flexWrap="wrap">
        {groupedByCategory.length > 0 ? (
          groupedByCategory.map(([category, members]) => (
            <MemberList
              key={category}
              category={category}
              members={members}
            />
          ))
        ) : (
          <Text
            color="grey.500"
            fontSize="lg">
            등록된 멤버가 존재하지 않습니다.
          </Text>
        )}
      </HStack>
    </Stack>
  )
}

export default MemberInfo
