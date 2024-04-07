import { HStack, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import { Skill, TechStack } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

import EmptyMessage from "../../EmptyMessage/EmptyMessage"

interface TechStacksProps {
  techStacks: TechStack[]
}
const TechStacks = ({ techStacks }: TechStacksProps) => {
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
          {techStacks.map(({ category, skill }) => {
            const skillList = skill as unknown as Skill[]
            return (
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
                  {skillList.map((skill, index) => (
                    <CommonTag
                      leftElement={
                        <Image
                          src={skill.iconImageUrl}
                          alt=""
                          w="2rem"
                        />
                      }
                      cursor="default"
                      label={skill.name}
                      key={`${skill.id}-${index}`}
                      fontSize="lg"
                    />
                  ))}
                </HStack>
              </Stack>
            )
          })}
        </Stack>
      ) : (
        <EmptyMessage type="TECHSTACKS" />
      )}
    </Stack>
  )
}

export default TechStacks
