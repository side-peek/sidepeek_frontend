import { Box } from "@chakra-ui/react"
import { TechStack } from "api-models"

import StyledProfileBarBox from "@pages/ProfilePage/styles/StyledProfileBarBox"
import StyledProfileBarContainer from "@pages/ProfilePage/styles/StyledProfileBarContainer"
import StyledProfileCardBox from "@pages/ProfilePage/styles/StyledProfileCardBox"
import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

import ProfileCard from "./ProfileCard"
import ProfileIntroduction from "./ProfileIntroduction"
import ProfileTechStack from "./ProfileTechStack"

export interface ProfileBarProps extends ProfileActionsButtonsProps {
  nickname: string
  profileImageUrl: string
  career: string | null
  introduction: string | null
  githubUrl: string | null
  blogUrl: string | null
  techStacks: TechStack[]
}

const ProfileBarView = ({
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
    <StyledProfileBarContainer>
      <StyledProfileBarBox>
        <StyledProfileCardBox>
          <ProfileCard
            {...{
              nickname,
              profileImageUrl,
              career,
              handleNewProject,
              handleEditProfile,
            }}
          />
        </StyledProfileCardBox>
        <Box>
          <ProfileIntroduction
            aboutMe={introduction}
            githubUrl={githubUrl}
            blogUrl={blogUrl}
          />
        </Box>
        <Box>
          <ProfileTechStack techStacks={techStacks} />
        </Box>
      </StyledProfileBarBox>
    </StyledProfileBarContainer>
  )
}

export default ProfileBarView
