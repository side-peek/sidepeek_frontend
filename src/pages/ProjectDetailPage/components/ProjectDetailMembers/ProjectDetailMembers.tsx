import { Avatar, Flex, Text } from "@chakra-ui/react"
import { Member } from "api-models"

import getGroupedCategory from "@pages/ProjectDetailPage/utils/getGroupedCategory"

interface ProjectDetailMembersProps {
  members: Member[]
}

const ProjectDetailMembers = ({ members }: ProjectDetailMembersProps) => {
  const groupedByCategory = getGroupedCategory(members)
  return (
    <Flex gap="1rem">
      {groupedByCategory.map((category) => (
        <Flex
          direction="column"
          key={category[0]}
          gap="1rem"
          alignItems="center"
          borderRadius="1rem"
          border="1px"
          p="1rem"
          borderColor="grey.200">
          <Flex
            gap="2rem"
            p="1rem"
            alignItems="center">
            {category[1].map((member) => (
              <Flex
                key={member.id}
                gap="1rem"
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Flex
                  gap="1rem"
                  direction="column"
                  alignItems="center"
                  justifyContent="center">
                  <Avatar src={member.profileImageUrl} />
                  <Text>{member.nickname}</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Text fontFamily="SCDream_Bold">{category[0]}</Text>
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectDetailMembers
