import { useState } from "react"
import { useWatch } from "react-hook-form"

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
    control,
    register,
    appendNewFields,
    deleteFields,
    appendMembers,
    removeMembers,
    errors,
    trigger,
  } = useMemberFieldsMethods()

  const watchFields = useWatch({ name: "members", control })

  const controlledMember = fields.map((field, index) => {
    return {
      ...field,
      ...watchFields[index],
    }
  })

  const [max, setMax] = useState(0)
  const MAX_FIELDS_NUMBER = 4
  const MIN_FIELDS_NUMBER = 1

  return (
    <Flex
      flexDir="column"
      gap="8px">
      {controlledMember.map((field, idx) => {
        register(`members.${idx}.data` as const, {
          validate: (data) =>
            data.length !== 0 || "팀원을 한명 이상 선택해주세요",
        })

        return (
          <FieldContainer
            key={field.id}
            gap="20px"
            overflow="scroll">
            <Box flex="1">
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

            <Box flex="1">
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
                selectedMembers={field.data || []}
              />
            </Box>
            <Box flex="6">
              <Flex
                gap="5px"
                overflow="scroll">
                {field.data?.map((member, idx) => {
                  return (
                    <MemberAvatarCard
                      key={member.nickname}
                      image={member.profileImageUrl || ""}
                      text={member.nickname}
                      onClick={() => {
                        removeMembers(member, idx)
                      }}
                    />
                  )
                })}
              </Flex>
            </Box>
            {idx >= MIN_FIELDS_NUMBER && (
              <CloseButton
                onClick={() => {
                  deleteFields(idx)
                  setMax(max - 1)
                }}
              />
            )}
          </FieldContainer>
        )
      })}
      {max < MAX_FIELDS_NUMBER && (
        <Button
          border="2px solid"
          borderColor="blue.200"
          onClick={() => {
            appendNewFields()
            setMax(max + 1)
          }}>
          팀원 추가
        </Button>
      )}
    </Flex>
  )
}

export default MemberFields
