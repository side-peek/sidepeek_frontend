import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

interface ProfileTechStackByCategoryProps {
  category: string
  techStacks?: TechStack[]
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
        sx={{ "& > *": { mr: "0.5rem", mb: "0.5rem" } }}
        mt="0.5rem">
        {techStacks &&
          techStacks
            .filter((techStack) => techStack.category === category)
            .map((techStack) => (
              <CommonTag
                key={techStack.id}
                label={techStack.skill.name}
                leftElement={
                  <Image
                    src={techStack.skill.iconImageUrl}
                    w="1.6rem"
                    h="1.6rem"
                  />
                }
              />
            ))}
      </Flex>
    </Box>
  )
}

export default ProfileTechStackByCategory
