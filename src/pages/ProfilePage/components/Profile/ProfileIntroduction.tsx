import { Box, Flex, Text } from "@chakra-ui/react"
import { FaSquarePen } from "@react-icons/all-files/fa6/FaSquarePen"
import { ImGithub } from "@react-icons/all-files/im/ImGithub"

import ProfileLink from "./ProfileLink"

interface IntroductionProps {
  aboutMe?: string | null
  githubUrl?: string | null
  blogUrl?: string | null
}

const ProfileIntroduction = ({
  aboutMe,
  githubUrl,
  blogUrl,
}: IntroductionProps) => {
  return (
    <Box
      w="32rem"
      px="1rem"
      py="3rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold">
        소개
      </Text>
      <Box
        mt="1rem"
        mb="1.5rem">
        {aboutMe?.split("\n").map((line, index) => (
          <Text
            key={index}
            fontSize="md">
            {line}
          </Text>
        ))}
      </Box>

      <Flex
        direction="column"
        gap="0.7rem">
        <ProfileLink
          Icon={ImGithub}
          url={githubUrl}
          alt="Github"
        />
        <ProfileLink
          Icon={FaSquarePen}
          url={blogUrl}
          alt="Blog"
        />
      </Flex>
    </Box>
  )
}

export default ProfileIntroduction
