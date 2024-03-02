// TODO: 기술스택 이미지 URL 추가
import { HStack, Text, VStack } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CustomTag from "@components/Tag/components/CustomTag"

import getGroupedCategory from "@pages/ProjectDetailPage/utils/getGroupedCategory"

interface ProjectDetailTechStacksProps {
  techStacks: TechStack[]
}
const ProjectDetailTechStacks = ({
  techStacks,
}: ProjectDetailTechStacksProps) => {
  const groupedByCategory = getGroupedCategory(techStacks)

  return (
    <VStack
      direction="column"
      alignItems="flex-start"
      spacing={10}>
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        기술 스택
      </Text>
      <VStack
        spacing={30}
        pl="5rem">
        {groupedByCategory.map((category) => (
          <HStack
            key={category[0]}
            spacing={3}>
            <HStack>
              <Text
                fontSize="xl"
                mr="2rem">
                {category[0]}
              </Text>
            </HStack>
            {category[1].map((stack) => (
              <CustomTag
                key={stack.skill.id}
                label={stack.skill.name}
              />
            ))}
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default ProjectDetailTechStacks
