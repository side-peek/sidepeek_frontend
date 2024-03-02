import { FaSquarePen } from "react-icons/fa6"
import { ImGithub } from "react-icons/im"

import { Box, HStack, Text, Textarea } from "@chakra-ui/react"

const ProfileIntroduction = () => {
  return (
    <Box w="100%">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold">
        소개
      </Text>
      <Textarea
        w="100%"
        placeholder="Here is a sample placeholder"
      />
      <HStack>
        <ImGithub size="2.6rem" />
        <Textarea placeholder="GitHub 링크를 입력해주세요" />
      </HStack>
      <HStack>
        <FaSquarePen size="2.7rem" />
        <Textarea placeholder="Blog 링크를 입력해주세요" />
      </HStack>
    </Box>
  )
}

export default ProfileIntroduction
