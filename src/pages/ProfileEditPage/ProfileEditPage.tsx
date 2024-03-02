import { Button, HStack, StackDivider, VStack } from "@chakra-ui/react"

import ProfileCard from "./components/ProfileCard"
import ProfileIntroduction from "./components/ProfileIntroduction"

const ProfileEditPage = () => {
  return (
    <>
      <VStack
        w="80%"
        h="100vh"
        bg="yellow"
        align="start"
        m="auto"
        divider={<StackDivider borderColor="blue" />}>
        <ProfileCard />
        <ProfileIntroduction />
        <HStack>
          <Button
            w="11rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="white"
            bg="blue.100"
            borderRadius="10px">
            비밀번호 변경
          </Button>
          <Button
            w="11rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="white"
            bg="blue.100"
            borderRadius="10px">
            변경내용 저장
          </Button>
        </HStack>
      </VStack>
    </>
  )
}

export default ProfileEditPage
