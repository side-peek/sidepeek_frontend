import { HStack, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react"
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
    <Stack
      spacing="3rem"
      align={techStacks.length > 0 ? "flex-start" : "center"}
      direction={techStacks.length ? "column" : "row"}>
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        기술 스택
      </Text>
      {techStacks.length > 0 ? (
        <Stack spacing="3rem">
          {groupedByCategory.map(([category, stacks]) => (
            <Stack
              key={category}
              direction={isLargerThan768 ? "row" : "column"}
              spacing="2rem">
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
                    leftElement={
                      <Image
                        src={stack.skill.iconImageUrl}
                        w="2rem"
                        h="2rem"
                      />
                    }
                    label={stack.skill.name}
                    key={stack.skill.id}
                    fontSize="lg"
                  />
                ))}
              </HStack>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Text
          fontSize="lg"
          color="grey.500">
          등록된 기술 스택이 존재하지 않습니다.
        </Text>
      )}
    </Stack>
  )
}

export default TechStacks
