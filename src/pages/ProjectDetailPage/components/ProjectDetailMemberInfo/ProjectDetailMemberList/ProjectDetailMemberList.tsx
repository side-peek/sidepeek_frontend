import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import ProjectDetailMemberItem from "../ProjectDetailMemberItem/ProjectDetailMemberItem"

interface ProjectDetailMemberListProps {
  members: Member[]
  category: string
}

const ProjectDetailMemberList = ({
  category,
  members,
}: ProjectDetailMemberListProps) => {
  return (
    <Flex
      direction="column"
      gap="1rem"
      alignItems="center"
      borderRadius="1rem"
      border="1px"
      p="2rem"
      borderColor="grey.400">
      <Flex
        gap="2rem"
        p="1rem"
        alignItems="center">
        {members.map((member) => (
          <ProjectDetailMemberItem
            member={member}
            key={member.id}
          />
        ))}
      </Flex>
      <Text
        fontFamily="SCDream_Bold"
        fontSize="xl">
        {category}
      </Text>
    </Flex>
  )
}

export default ProjectDetailMemberList
