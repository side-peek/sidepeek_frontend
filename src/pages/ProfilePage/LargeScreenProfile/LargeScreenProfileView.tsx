import { Box } from "@chakra-ui/react"
import { TechStackType } from "api-models"

import ProfileBar from "../components/ProfileBar"
import ProjectsView from "../components/ProjectsView"

export interface ProfileBarProps {
  nickname: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStackType[] | undefined
}

const LargeScreenProfileView = ({
  nickname,
  profileImageUrl,
  career,
  introduction,
  githubUrl,
  blogUrl,
  techStacks,
}: ProfileBarProps) => {
  return (
    <>
      <Box
        minW="38rem"
        zIndex={999}>
        <ProfileBar
          {...{
            nickname,
            profileImageUrl,
            career,
            introduction,
            githubUrl,
            blogUrl,
            techStacks,
          }}
          nickname={nickname}
        />
      </Box>
      <Box width="80%">
        <ProjectsView />
      </Box>
    </>
  )
}

export default LargeScreenProfileView
