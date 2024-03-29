import { Box, VStack } from "@chakra-ui/react"

import ProfileCard from "../components/Profile/ProfileCard"
import ProjectsView from "../components/Projects/Projects.view"
import { ProfileActionsButtonsProps } from "../types/types"

interface ProfileCardProps extends ProfileActionsButtonsProps {
  profileImageUrl?: string
  nickname?: string
  career?: string | null
  job?: string | null
}
const SmallScreenView = ({
  nickname,
  profileImageUrl,
  career,
  job,
  handleNewProject,
  handleEditProfile,
}: ProfileCardProps) => {
  return (
    <VStack
      w="100%"
      mt="-6rem">
      <ProfileCard
        {...{
          nickname,
          profileImageUrl,
          career,
          job,
          handleNewProject,
          handleEditProfile,
        }}
      />
      <Box width="100%">
        <ProjectsView />
      </Box>
    </VStack>
  )
}

export default SmallScreenView
