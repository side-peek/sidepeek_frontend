import { StackDivider, VStack } from "@chakra-ui/react"

import ProfileCard from "./components/ProfileCard"

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
      <ProfileCard />
    </VStack>
  )
}

export default ProfileEditPage
