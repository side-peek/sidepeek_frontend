import { Box, Button, Input, Text } from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"

import CloseButton from "../styles/CloseButton"
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
    <>
      {fields.map((field, idx) => {
        const selectedMembers = getSelectedMembers(idx)
        register(`members.${idx}.data`, {
          validate: {
            isEmpty: (data) => {
              console.log(data.length)
              return data.length !== 0
            },
          },
        })

        return (
          <FieldContainer key={field.id}>
            <Box>
              <Input
                placeholder="카테고리를 입력해주세요"
                width="20rem"
                {...register(`members.${idx}.category`, {
                  required: "분야 입력은 필수입니다",
                })}
              />
              <ErrorMessage
                name={`members.${idx}.category`}
                errors={errors}
                render={({ message }) => {
                  return (
                    <Text
                      as="b"
                      color="red.200">
                      {message}
                    </Text>
                  )
                }}
              />
            </Box>

            <Box>
              <ErrorMessage
                name={`members.${idx}.data`}
                errors={errors}
                render={({ message }) => {
                  return (
                    <Text
                      as="b"
                      color="red.200">
                      {message}
                    </Text>
                  )
                }}
              />
              <UserSearchBox
                onClick={({ id, nickname, profileImageUrl }) => {
                  appendMembers({ id, nickname, profileImageUrl }, idx)
                  trigger(`members.${idx}.data`)
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
      <Button onClick={appendNewFields}>팀원 추가하기</Button>
    </>
  )
}

export default MemberFields
