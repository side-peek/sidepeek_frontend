import { Box, Center, Flex, StackDivider, VStack } from "@chakra-ui/react"

import Introduction from "./Introduction"
import ProfileCard from "./ProfileCard"
import TechStack from "./TechStack"

const Bar = () => {
  return (
    <Center
      bg="white"
      position="absolute"
      //   h="102rem"
      w="36rem"
      top="15rem"
      left="15rem"
      border="1px solid darkgrey"
      borderRadius="20px">
      <VStack
        divider={<StackDivider borderColor="darkgrey" />}
        // h="100rem"
        w="32rem"
        bg="#ffffff"
        //   border="2rem solid darkgrey"
      >
        <Flex
          minH="30rem"
          alignItems="center">
          <ProfileCard
            nickName="테스트 계정"
            year={1}
          />
        </Flex>
        <Box>
          <Introduction aboutMe="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" />
        </Box>
        <Box>
          <TechStack />
        </Box>
      </VStack>
    </Center>
  )
}

export default Bar
