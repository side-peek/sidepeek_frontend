import { Box, Flex, Text } from "@chakra-ui/react"
import { TechStackType } from "api-models"

import CustomTag from "@components/Tag/components/CustomTag"

interface TechStackProps {
  techStacks: TechStackType[] | undefined
}

const ProfileTechStack = ({ techStacks }: TechStackProps) => {
  const categories = Array.from(
    new Set(techStacks && techStacks.map((techStack) => techStack.category)),
  )

  return (
    <Box
      w="32rem"
      px="1rem"
      py="3rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold">
        기술스택
      </Text>
      {categories.map((category, idx) => (
        <Box key={idx}>
          <Text
            mt="1rem"
            fontSize="lg">
            {category}
          </Text>
          <Flex
            flexWrap="wrap"
            sx={{ "& > *": { mr: "0.8rem", mb: "0.8rem" } }}
            mt="0.5rem">
            {techStacks &&
              techStacks
                .filter((techStack) => techStack.category === category)
                .map((techStack) => (
                  <CustomTag
                    key={techStack.id}
                    label={techStack.skill.name}
                  />
                ))}
          </Flex>
        </Box>
      ))}
    </Box>
  )
}

export default ProfileTechStack
