import { Box, Center, Flex, StackDivider, VStack } from "@chakra-ui/react"
import { TechStackType } from "api-models"

import ProfileCard from "./ProfileCard"
import ProfileIntroduction from "./ProfileIntroduction"
import TechStack from "./ProfileTechStack"

export interface ProfileBarProps {
  nickname: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStackType[] | undefined
}

const ProfileBar = ({
  nickname,
  profileImageUrl,
  career,
  introduction,
  githubUrl,
  blogUrl,
  techStacks,
}: ProfileBarProps) => {
  return (
    <Center
      bg="white"
      w="36rem"
      mt="-10rem"
      border="1px solid darkgrey"
      borderRadius="20px">
      <VStack
        divider={<StackDivider borderColor="darkgrey" />}
        w="32rem"
        bg="#ffffff">
        <Flex
          minH="30rem"
          alignItems="center">
          <ProfileCard
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            career={career}
          />
        </Flex>
        <Box>
          <ProfileIntroduction
            aboutMe={introduction}
            githubUrl={githubUrl}
            blogUrl={blogUrl}
          />
        </Box>
        <Box>
          <TechStack techStacks={techStacks} />
        </Box>
      </VStack>
    </Center>
  )
}

export default ProfileBar
