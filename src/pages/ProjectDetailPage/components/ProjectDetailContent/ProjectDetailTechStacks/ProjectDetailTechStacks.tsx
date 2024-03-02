// TODO: 1. 기술스택 이미지 URL 추가
import { Flex, HStack, Text, VStack } from "@chakra-ui/react"
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
        pl="5rem"
        alignItems="flex-start">
        {groupedByCategory.map((category) => (
          <Flex
            key={category[0]}
            direction="column"
            gap="1rem">
            <Text fontSize="xl">{category[0]}</Text>
            <HStack
              spacing="1rem"
              flexWrap="wrap">
              {category[1].map((stack) => (
                <CustomTag
                  label={stack.skill.name}
                  key={stack.skill.id}
                />
              ))}
            </HStack>
          </Flex>
        ))}
      </VStack>
    </VStack>
  )
}

export default ProjectDetailTechStacks
