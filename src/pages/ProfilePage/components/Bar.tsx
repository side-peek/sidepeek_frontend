import { Box, Center, Flex, StackDivider, VStack } from "@chakra-ui/react"

import ProfileCard from "./ProfileCard"

const Bar = () => {
  return (
    <Center
      bg="white"
      position="absolute"
      h="102rem"
      w="44rem"
      top="15rem"
      left="15rem"
      border="1px solid darkgrey"
      borderRadius="20px">
      <VStack
        divider={<StackDivider borderColor="darkgrey" />}
        h="100rem"
        w="40rem"
        bg="#ffffff"
        //   border="2rem solid darkgrey"
      >
        <Flex
          h="40rem"
          alignItems="center">
          <ProfileCard
            nickName="테스트 계정"
            year={1}
          />
        </Flex>
        <Box h="40rem"></Box>
        <Box h="40rem"></Box>
      </VStack>
    </Center>
  )
}

export default Bar
