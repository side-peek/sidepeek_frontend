import { HStack, Stack, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import { categorizeMembers } from "@utils/categorizeMembers"

import MemberList from "./MemberList/MemberList"

categorizeMembers

interface MemberInfoProps {
  members: Member[]
}

const MemberInfo = ({ members }: MemberInfoProps) => {
  const categorizedMembers = categorizeMembers(members)

  return (
    <Stack
      direction={categorizedMembers.length > 0 ? "column" : "row"}
      spacing="2rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        팀원
      </Text>
      <HStack
        spacing="1rem"
        flexWrap="wrap">
        {categorizedMembers.length > 0 ? (
          categorizedMembers.map(({ role, members }) => (
            <MemberList
              key={role}
              category={role}
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
