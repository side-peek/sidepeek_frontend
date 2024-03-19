import { IoCloseCircle } from "react-icons/io5"

import { Button, Flex, Input } from "@chakra-ui/react"

import AvatarCard from "@components/AvatarCard/AvatarCard"

import FieldContainer from "../styles/FieldContainer"
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
    <Flex
      flexDir="column"
      gap="10px">
      {fields.map((field, idx) => {
        const selectedMembers = getSelectedMembers(idx)
        return (
          <FieldContainer key={field.id}>
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
                appendMembers({ id, nickname, profileImageUrl }, idx)
              }}
              selectedMembers={getSelectedMembers(idx)}
            />
            {selectedMembers?.map((member, idx) => {
              return (
                <AvatarCard key={idx}>
                  <IoCloseCircle
                    size="20"
                    onClick={() => removeMembers(member, idx)}
                  />
                  <AvatarCard.Image src={member.profileImageUrl || ""} />
                  <AvatarCard.Header text={member.nickname} />
                </AvatarCard>
              )
            })}
          </FieldContainer>
        )
      })}
      <Button onClick={appendNewFields}>팀원 추가하기</Button>
    </Flex>
  )
}

export default MemberFields
