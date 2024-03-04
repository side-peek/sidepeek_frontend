import { Box } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileBarView from "../components/Profile/ProfileBar.view"
import ProjectsView from "../components/Projects/Projects.view"
import { ProfileActionsButtonsProps } from "../types/types"

export interface ProfileBarProps extends ProfileActionsButtonsProps {
  nickname: string
  profileImageUrl: string
  career: string
  introduction: string
  githubUrl: string
  blogUrl: string
  techStacks: TechStack[]
}

const LargeScreenView = ({
  nickname,
  profileImageUrl,
  career,
  introduction,
  githubUrl,
  blogUrl,
  techStacks,
  handleNewProject,
  handleEditProfile,
}: ProfileBarProps) => {
  return (
    <>
      <Box
        minW="38rem"
        zIndex={999}>
        <ProfileBarView
          {...{
            nickname,
            profileImageUrl,
            career,
            introduction,
            githubUrl,
            blogUrl,
            techStacks,
            handleNewProject,
            handleEditProfile,
          }}
        />
      </Box>
      <Box width="80%">
        <ProjectsView />
      </Box>
    </>
  )
}

export default LargeScreenView
