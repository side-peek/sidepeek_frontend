import { ImGithub } from "react-icons/im"

import { Box, HStack, Link, Text } from "@chakra-ui/react"

interface IntroductionProps {
  aboutMe: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
}

const ProfileIntroduction = ({
  aboutMe,
  githubUrl,
  blogUrl,
}: IntroductionProps) => {
  return (
    <Box
      w="32rem"
      //   border="2px solid red"
      px="1rem"
      py="3rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold">
        소개
      </Text>
      <Text
        mt="1rem"
        fontSize="md">
        {aboutMe}
      </Text>

      <HStack mt="1.5rem">
        <ImGithub size="2rem" />
        {/* <Text>github링크</Text> */}
        <Link href={githubUrl}>GitHub 링크</Link>
      </HStack>
      <HStack mt="0.8rem">
        <ImGithub size="2rem" />
        <Link href={blogUrl}>Blog 링크</Link>
      </HStack>
    </Box>
  )
}

export default ProfileIntroduction
