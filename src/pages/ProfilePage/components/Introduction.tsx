import { ImGithub } from "react-icons/im"

import { Box, HStack, Text } from "@chakra-ui/react"

interface IntroductionProps {
  aboutMe: string
}

const Introduction = ({ aboutMe }: IntroductionProps) => {
  return (
    <Box
      w="40rem"
      //   border="2px solid red"
      p="2rem">
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
        <Text>github링크</Text>
      </HStack>
      <HStack mt="0.8rem">
        <ImGithub size="2rem" />
        <Text>블로그 링크</Text>
      </HStack>
    </Box>
  )
}

export default Introduction
