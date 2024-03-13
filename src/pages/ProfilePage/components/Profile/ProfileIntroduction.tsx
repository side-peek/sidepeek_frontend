import { Box, Text } from "@chakra-ui/react"

import ProfileLink from "./ProfileLink"

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
      <ProfileLink
        githubUrl={githubUrl}
        blogUrl={blogUrl}
      />
    </Box>
  )
}

export default ProfileIntroduction
