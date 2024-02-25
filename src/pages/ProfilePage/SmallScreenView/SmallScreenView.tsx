import { Box, VStack } from "@chakra-ui/react"

import ProfileCard from "../components/Profile/ProfileCard"
import ProjectsView from "../components/Projects/ProjectsView"

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

      <Box width="100%">
        <ProjectsView />
      </Box>
    </VStack>
  )
}

export default SmallScreenProfile
