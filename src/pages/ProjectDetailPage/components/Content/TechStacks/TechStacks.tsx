import { Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

import techStacksCategory from "@pages/ProjectDetailPage/utils/techStacksCategory"

interface TechStacksProps {
  techStacks: TechStack[]
}
const TechStacks = ({ techStacks }: TechStacksProps) => {
  const groupedByCategory = techStacksCategory(techStacks)
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return (
    <Flex
      direction="column"
      gap="3rem">
      <Text
        fontSize="lg"
        fontFamily="SCDream_Bold">
        기술 스택
      </Text>
      <Flex
        gap="3rem"
        direction="column">
        {groupedByCategory.map(([category, stacks]) => (
          <Flex
            key={category}
            direction={isLargerThan768 ? "row" : "column"}
            gap="2rem">
            <Text
              fontSize="xl"
              minW="8rem"
              whiteSpace="nowrap">
              {category}
            </Text>
            <HStack
              spacing="1rem"
              flexWrap="wrap">
              {stacks.map((stack) => (
                <CommonTag
                  label={stack.skill.name}
                  key={stack.skill.id}
                />
              ))}
            </HStack>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default TechStacks
