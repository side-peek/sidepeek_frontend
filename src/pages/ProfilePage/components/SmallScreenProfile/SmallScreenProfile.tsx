import { Box, VStack } from "@chakra-ui/react"

import ProfileCard from "../ProfileCard"
import ProjectsView from "../ProjectsView"

interface ProfileCardProps {
  profileImageUrl?: string
  nickname?: string
  career?: string
}
const SmallScreenProfile = ({
  nickname,
  profileImageUrl,
  career,
}: ProfileCardProps) => {
  return (
    <VStack
      w="100%"
      mt="-6rem">
      <ProfileCard
        nickname={nickname}
        profileImageUrl={profileImageUrl}
        career={career}
      />

      <Box
        width="100%"
        // bg="blue"
      >
        <ProjectsView />
      </Box>
    </VStack>
  )
}

export default SmallScreenProfile
