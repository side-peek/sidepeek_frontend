import { Box, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileTechStackByCategory from "./ProfileTechStackByCategory"

interface TechStackProps {
  techStacks: TechStack[] | undefined
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
        <ProfileTechStackByCategory
          key={idx}
          category={category}
          techStacks={techStacks}
        />
      ))}
    </Box>
  )
}

export default ProfileTechStack
