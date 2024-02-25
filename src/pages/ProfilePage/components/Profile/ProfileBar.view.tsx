import { Box, Center, Flex, StackDivider, VStack } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileCard from "./ProfileCard"
import ProfileIntroduction from "./ProfileIntroduction"
import ProfileTechStack from "./ProfileTechStack"

export interface ProfileBarProps {
  nickname: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStack[] | undefined
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
      bg="default"
      w="36rem"
      mt="-10rem"
      border="1px solid"
      borderColor="grey.200"
      borderRadius="20px">
      <VStack
        divider={<StackDivider borderColor="grey.200" />}
        w="32rem"
        bg="default">
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
          <ProfileTechStack techStacks={techStacks} />
        </Box>
      </VStack>
    </Center>
  )
}

export default ProfileBar
