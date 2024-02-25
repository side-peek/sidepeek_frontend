import { Box, Flex, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CustomTag from "@components/Tag/components/CustomTag"

interface ProfileTechStackByCategoryProps {
  category: string
  techStacks: TechStack[] | undefined
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
              <CustomTag
                key={techStack.id}
                label={techStack.skill.name}
              />
            ))}
      </Flex>
    </Box>
  )
}

export default ProfileTechStackByCategory
