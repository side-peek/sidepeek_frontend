import { HStack, Stack, Text } from "@chakra-ui/react"
import { Member, UserSummary } from "api-models"

import EmptyMessage from "../../EmptyMessage/EmptyMessage"
import MemberList from "./MemberList/MemberList"

interface MemberInfoProps {
  members: Member[]
}

const MemberInfo = ({ members }: MemberInfoProps) => {
  return (
    <Stack
      direction={members.length > 0 ? "column" : "row"}
      spacing="2rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        팀원
      </Text>
      <HStack
        spacing="1rem"
        flexWrap="wrap">
        {members.length > 0 ? (
          members.map(({ role, userSummary }) => {
            const memberList = userSummary as unknown as UserSummary[]
            return (
              <MemberList
                key={role}
                category={role}
                memberList={memberList}
              />
            )
          })
        ) : (
          <EmptyMessage type="MEMBER" />
        )}
      </HStack>
    </Stack>
  )
}

export default MemberInfo
