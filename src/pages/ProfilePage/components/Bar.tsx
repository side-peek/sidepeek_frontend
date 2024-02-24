import { Box, Center, Flex, StackDivider, VStack } from "@chakra-ui/react"
import { TechStackType } from "api-models"

import Introduction from "./Introduction"
import ProfileCard from "./ProfileCard"
import TechStack from "./TechStack"

interface ProfileBarProps {
  nickName: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStackType[] | undefined
}

const Bar = ({
  nickName,
  profileImageUrl,
  career,
  introduction,
  githubUrl,
  blogUrl,
  techStacks,
}: ProfileBarProps) => {
  console.log(nickName, "여기")
  return (
    <Center
      bg="white"
      w="36rem"
      //   w="20%"
      //   top="25rem"
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
            nickName={nickName}
            profileImageUrl={profileImageUrl}
            career={career}
          />
        </Flex>
        <Box>
          <Introduction
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

export default Bar
