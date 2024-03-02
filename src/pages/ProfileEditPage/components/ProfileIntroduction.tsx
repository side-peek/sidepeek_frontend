import { FaSquarePen } from "react-icons/fa6"
import { ImGithub } from "react-icons/im"

import { Box, HStack, Input, Text, Textarea } from "@chakra-ui/react"

import { ProfileInfo } from "../types/types"

interface ProfileIntroductionProps
  extends Pick<ProfileInfo, "introduction" | "githubUrl" | "blogUrl"> {}

const ProfileIntroduction = ({
  introduction,
  githubUrl,
  blogUrl,
}: ProfileIntroductionProps) => {
  return (
    <Box
      w="100%"
      pb="2rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold"
        margin="1.5rem 0 1.5rem 1rem">
        소개
      </Text>
      <Textarea
        height="10rem"
        resize="none"
        value={introduction}
        placeholder="소개글을 입력해주세요"
      />

      <Box mt="2rem">
        <HStack mb="1rem">
          <ImGithub size="2.6rem" />
          <Input
            variant="flushed"
            height="3rem"
            value={githubUrl}
            placeholder="GitHub 링크를 입력해주세요"
            ml="0.5rem"
            w="30rem"
          />
        </HStack>
        <HStack>
          <FaSquarePen size="2.65rem" />
          <Input
            variant="flushed"
            height="3rem"
            value={blogUrl}
            placeholder="Blog 링크를 입력해주세요"
            ml="0.5rem"
            w="30rem"
          />
        </HStack>
      </Box>
    </Box>
  )
}

export default ProfileIntroduction
