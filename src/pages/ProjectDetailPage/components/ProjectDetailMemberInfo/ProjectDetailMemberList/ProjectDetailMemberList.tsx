import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import ProjectDetailMemberItem from "../ProjectDetailMemberItem/ProjectDetailMemberItem"

interface ProjectDetailMemberListProps {
  category: [string, Member[]]
}

const ProjectDetailMemberList = ({
  category,
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
        {category[1].map((member) => (
          <ProjectDetailMemberItem
            member={member}
            key={member.id}
          />
        ))}
      </Flex>
      <Text
        fontFamily="SCDream_Bold"
        fontSize="xl">
        {category[0]}
      </Text>
    </Flex>
  )
}

export default ProjectDetailMemberList
