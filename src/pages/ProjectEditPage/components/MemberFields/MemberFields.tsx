import { Box, Button, Flex, Input } from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"

import CloseButton from "../styles/CloseButton"
import ErrorText from "../styles/ErrorText"
import FieldContainer from "../styles/FieldContainer"
import MemberAvatarCard from "./components/MemberAvatarCard"
import UserSearchBox from "./components/UserSearchBox"
import { useMemberFieldsMethods } from "./hooks/useMemberFieldsMethods"

const MemberFields = () => {
  const {
    fields,
    register,
    appendNewFields,
    deleteFields,
    appendMembers,
    removeMembers,
    getSelectedMembers,
    errors,
    trigger,
  } = useMemberFieldsMethods()

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {fields.map((field, idx) => {
        const selectedMembers = getSelectedMembers(idx)
        register(`members.${idx}.data` as const, {
          validate: (data) =>
            data.length !== 0 || "팀원을 한명 이상 선택해주세요",
        })

        return (
          <FieldContainer key={field.id}>
            <Box>
              <Input
                placeholder="카테고리를 입력해주세요"
                width="20rem"
                {...register(`members.${idx}.category` as const, {
                  required: "분야 입력은 필수입니다",
                })}
              />
              <ErrorMessage
                name={`members.${idx}.category` as const}
                errors={errors}
                render={({ message }) => <ErrorText message={message} />}
              />
            </Box>

            <Box>
              <ErrorMessage
                name={`members.${idx}.data`}
                errors={errors}
                render={({ message }) => <ErrorText message={message} />}
              />
              <UserSearchBox
                onClick={({ id, nickname, profileImageUrl }) => {
                  appendMembers({ id, nickname, profileImageUrl }, idx)
                  trigger(`members.${idx}.data` as const)
                }}
                selectedMembers={getSelectedMembers(idx)}
              />
            </Box>
            <Box>
              {selectedMembers?.map((member, idx) => {
                return (
                  <MemberAvatarCard
                    key={idx}
                    image={member.profileImageUrl || ""}
                    text={member.nickname}
                    onClick={() => {
                      removeMembers(member, idx)
                    }}
                  />
                )
              })}
            </Box>
            {idx >= 1 && <CloseButton onClick={() => deleteFields(idx)} />}
          </FieldContainer>
        )
      })}
      <Button
        border="2px solid"
        borderColor="blue.200"
        onClick={appendNewFields}>
        팀원 추가
      </Button>
    </Flex>
  )
}

export default MemberFields
