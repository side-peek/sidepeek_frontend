import { FaSquarePen } from "react-icons/fa6"
import { ImGithub } from "react-icons/im"

import { Box, HStack, Link, Text } from "@chakra-ui/react"

// TODO: props 타입이 undefined가 될수 있다는게 뭔가 이상함 이렇게 안하면 케찹 터짐. 해결해보기
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
      <Text
        mt="1rem"
        fontSize="md">
        {aboutMe}
      </Text>

      <HStack mt="1.5rem">
        <ImGithub size="2.6rem" />
        {githubUrl ? (
          <Link
            href={githubUrl}
            fontSize="1.3rem">
            {githubUrl}
          </Link>
        ) : (
          <Text
            fontSize="1.3rem"
            mt="0.5rem">
            Github 링크가 없습니다
          </Text>
        )}
      </HStack>
      <HStack mt="0.8rem">
        <FaSquarePen size="2.6rem" />
        {blogUrl ? (
          <Link
            href={blogUrl}
            fontSize="1.3rem">
            {blogUrl}
          </Link>
        ) : (
          <Text
            fontSize="1.3rem"
            mt="0.3rem">
            Blog 링크가 없습니다
          </Text>
        )}
      </HStack>
    </Box>
  )
}

export default ProfileIntroduction
