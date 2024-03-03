import { Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import getGroupedCategory from "@pages/ProjectDetailPage/utils/getGroupedCategory"

import ProjectDetailMemberItem from "./ProjectDetailMemberItem/ProjectDetailMemberItem"

interface ProjectDetailMembersProps {
  members: Member[]
}

const ProjectDetailMembers = ({ members }: ProjectDetailMembersProps) => {
  const groupedByCategory = getGroupedCategory(members)
  return (
    <Flex
      direction="column"
      gap="2rem">
      <Text fontSize="2xl">팀원</Text>
      <Flex gap="1rem">
        {groupedByCategory.map((category) => (
          <Flex
            key={category[0]}
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
        ))}
      </Flex>
    </Flex>
  )
}

export default ProjectDetailMembers
