import { Box, Flex, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

// TODO: props 타입이 undefined가 될수 있다는게 뭔가 이상함 이렇게 안하면 케찹 터짐. 해결해보기
interface ProfileTechStackByCategoryProps {
  category: string
  techStacks: TechStack[]
}

const ProfileTechStackByCategory = ({
  category,
  techStacks,
}: ProfileTechStackByCategoryProps) => {
  return (
    <Box>
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
              <CommonTag
                key={techStack.id}
                label={techStack.skill.name}
              />
            ))}
      </Flex>
    </Box>
  )
}

export default ProfileTechStackByCategory
