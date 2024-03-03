import { Avatar, Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

interface ProjectDetailMemberItemProps {
  member: Member
}

const ProjectDetailMemberItem = ({ member }: ProjectDetailMemberItemProps) => {
  return (
    <Flex
      gap="1rem"
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Flex
        gap="1rem"
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Avatar
          src={member.profileImageUrl}
          width="6rem"
          height="6rem"
        />
        <Text fontSize="lg">{member.nickname}</Text>
      </Flex>
    </Flex>
  )
}

export default ProjectDetailMemberItem
