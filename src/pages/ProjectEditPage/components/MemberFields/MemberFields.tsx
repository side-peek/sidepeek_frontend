import { useEffect, useRef, useState } from "react"

import { Box, Button, Flex, Input } from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"

import { projectInputRegister } from "@pages/ProjectEditPage/constants/registerOptions"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import CloseButton from "../styles/CloseButton"
import ErrorText from "../styles/ErrorText"
import FieldContainer from "../styles/FieldContainer"
import MemberAvatarCard from "./components/MemberAvatarCard"
import UserSearchBox from "./components/UserSearchBox"
import { useMemberStore } from "./stores/useMemberStore"

const MemberFields = () => {
  const {
    fields,
    appendField,
    appendMember,
    deleteField,
    deleteMember,
    changeRole,
  } = useMemberStore()

  const {
    formState: { errors },
    register,
  } = useProjectFormContext()

  const [max, setMax] = useState(0)
  const MAX_FIELDS_NUMBER = 4
  const MIN_FIELDS_NUMBER = 1

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    register("members", projectInputRegister["members"])
  }, [register])

  useEffect(() => {
    if (errors.members) {
      ref.current?.focus()
    }
  }, [errors.members])

  return (
    <Flex
      flexDir="column"
      gap="8px">
      <ErrorMessage
        name="members"
        errors={errors}
        render={({ message }) => <ErrorText message={message}></ErrorText>}
      />
      {fields?.map((field, fieldIdx) => {
        return (
          <FieldContainer
            key={fieldIdx}
            gap="20px"
            overflow="scroll"
            ref={ref}
            tabIndex={-1}>
            <Box flex="1">
              <Input
                placeholder="카테고리를 입력해주세요"
                width="20rem"
                onChange={(e) => changeRole(e.target.value.trim(), fieldIdx)}
                value={field.role}
              />
            </Box>
            <Box flex="1">
              <UserSearchBox
                onClick={({ id, nickname, profileImageUrl, isSocialLogin }) => {
                  appendMember(
                    { id, nickname, profileImageUrl, isSocialLogin },
                    fieldIdx,
                  )
                }}
                selectedMembers={field.userSummary || []}
              />
            </Box>
            <Box flex="6">
              <Flex
                gap="5px"
                overflow="scroll">
                {field.userSummary?.map((member) => {
                  return (
                    <MemberAvatarCard
                      key={member.id}
                      image={member.profileImageUrl || ""}
                      text={member.nickname}
                      onClick={() => {
                        deleteMember(member, fieldIdx) //fieldIdx에 해당하는 값을 찾아서
                      }}
                    />
                  )
                })}
              </Flex>
            </Box>
            {fieldIdx >= MIN_FIELDS_NUMBER && (
              <CloseButton
                onClick={() => {
                  deleteField(fieldIdx)
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
            appendField()
            setMax(max + 1)
          }}>
          팀원 추가
        </Button>
      )}
    </Flex>
  )
}

export default MemberFields
