import { Box } from "@chakra-ui/react"
import { TechStack } from "api-models"

import ProfileBarView from "../components/Profile/ProfileBar.view"
import ProjectsView from "../components/Projects/Projects.view"
import { ProfileActionsButtonsProps } from "../types/types"

export interface ProfileBarProps extends ProfileActionsButtonsProps {
  nickname: string
  profileImageUrl: string
  career: string | null
  job: string | null
  introduction: string | null
  githubUrl: string | null
  blogUrl: string | null
  techStacks: TechStack[]
}

const LargeScreenView = ({
  nickname,
  profileImageUrl,
  career,
  job,
  introduction,
  githubUrl,
  blogUrl,
  techStacks,
  handleNewProject,
  handleEditProfile,
}: ProfileBarProps) => {
  console.log(job)
  return (
    <>
      <Box
        minW="38rem"
        zIndex="base">
        <ProfileBarView
          {...{
            nickname,
            profileImageUrl,
            career,
            job,
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
