import { Box, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileTechStackByCategory from "./ProfileTechStackByCategory"

interface TechStackProps {
  techStacks?: TechStack[]
}

const ProfileTechStack = ({ techStacks }: TechStackProps) => {
  const categories = [
    ...new Set(techStacks && techStacks.map((techStack) => techStack.category)),
  ]

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

      {categories.length !== 0 ? (
        categories.map((category) => (
          <ProfileTechStackByCategory
            key={category}
            category={category}
            techStacks={techStacks}
          />
        ))
      ) : (
        <Text
          fontSize="1.3rem"
          color="grey.500"
          mt="1rem">
          등록된 기술스택이 없습니다
        </Text>
      )}
    </Box>
  )
}

export default ProfileTechStack
