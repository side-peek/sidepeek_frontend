import { Box, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileTechStackByCategory from "./ProfileTechStackByCategory"

// TODO: props 타입이 undefined가 될수 있다는게 뭔가 이상함 이렇게 안하면 케찹 터짐. 해결해보기
interface TechStackProps {
  techStacks: TechStack[] | undefined
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
      {categories.map((category) => (
        <ProfileTechStackByCategory
          key={category}
          category={category}
          techStacks={techStacks}
        />
      ))}
    </Box>
  )
}

export default ProfileTechStack
