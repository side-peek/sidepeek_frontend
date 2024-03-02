import { StackDivider, VStack } from "@chakra-ui/react"

import ProfileCard from "./components/ProfileCard"
import ProfileIntroduction from "./components/ProfileIntroduction"

const ProfileEditPage = () => {
  return (
    <VStack
      w="80%"
      h="100vh"
      bg="yellow"
      align="start"
      m="auto"
      divider={<StackDivider borderColor="blue" />}>
      <ProfileCard />
      <ProfileIntroduction />
    </VStack>
  )
}

export default ProfileEditPage
