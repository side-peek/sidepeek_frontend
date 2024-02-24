import { Box } from "@chakra-ui/react"
import { TechStackType } from "api-models"

import ProfileBar from "../ProfileBar"
import ProjectsView from "../ProjectsView"

export interface ProfileBarProps {
  nickname: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStackType[] | undefined
}

const LargeScreenProfile = ({
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
        zIndex={999}
        // bg="red"
      >
        <ProfileBar
          nickName={nickname}
          profileImageUrl={profileImageUrl}
          career={career}
          introduction={introduction}
          githubUrl={githubUrl}
          blogUrl={blogUrl}
          techStacks={techStacks}
        />
      </Box>
      <Box width="80%">
        <ProjectsView />
      </Box>
    </>
  )
}

export default LargeScreenProfile
