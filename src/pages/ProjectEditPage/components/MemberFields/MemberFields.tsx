import { IoCloseCircle } from "react-icons/io5"

import { Button, Flex, Input } from "@chakra-ui/react"

import AvatarCard from "@components/AvatarCard/AvatarCard"

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
  } = useMemberFieldsMethods()

  return (
    <>
      {fields.map((field, idx) => {
        return (
          <Flex
            key={field.id}
            gap="5px"
            border="1px solid"
            borderColor="grey.400"
            borderRadius="1rem"
            padding="5rem"
            overflow="scroll">
            <IoCloseCircle
              size="20"
              onClick={() => deleteFields(idx)}
            />
            <Input
              placeholder="카테고리를 입력해주세요"
              width="20rem"
              {...register(`members.${idx}.category`, { required: "true" })}
            />
            <UserSearchBox
              onClick={({ id, nickname, profileImageUrl }) => {
                appendMembers(
                  { userId: id as number, nickname, profileImageUrl },
                  idx,
                )
              }}
            />
            {getSelectedMembers(idx)?.map((member) => {
              return (
                <AvatarCard key={member.userId}>
                  <IoCloseCircle
                    size="20"
                    onClick={() => removeMembers(member, idx)}
                  />
                  <AvatarCard.Image src={member.profileImageUrl || ""} />
                  <AvatarCard.Header text={member.nickname} />
                </AvatarCard>
              )
            })}
          </Flex>
        )
      })}
      <Button onClick={appendNewFields}>팀원 추가하기</Button>
    </>
  )
}

export default MemberFields
