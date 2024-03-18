import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { TechStack } from "api-models"

import CommonTag from "@components/Tag/components/CommonTag"

interface ProfileTechStackByCategoryProps {
  category: string
  skills: TechStack[]
}
const ProfileTechStackByCategory = ({
  category,
  skills,
}: ProfileTechStackByCategoryProps) => {
  return (
    <Box ml="0.5rem">
      <Text
        mt="1rem"
        ml="0.3rem"
        fontSize="md">
        {category}
      </Text>
      <Flex
        flexWrap="wrap"
        sx={{ "& > *": { mr: "0.8rem" } }}
        mt="0.5rem"
        mb="1.5rem">
        {skills &&
          skills
            .filter((skill) => skill.category === category)
            .map(({ skill }) => (
              <CommonTag
                key={skill.id}
                label={skill.name}
                leftElement={
                  <Image
                    src={skill.iconImageUrl}
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
