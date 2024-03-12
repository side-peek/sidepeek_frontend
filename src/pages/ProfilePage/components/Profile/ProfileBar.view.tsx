import { Box } from "@chakra-ui/react"
import { TechStack } from "api-models"

import StyledProfileBarBox from "@pages/ProfilePage/styles/StyledProfileBarBox"
import StyledProfileBarContainer from "@pages/ProfilePage/styles/StyledProfileBarContainer"
import StyledProfileCardBox from "@pages/ProfilePage/styles/StyledProfileCardBox"
import { ProfileActionsButtonsProps } from "@pages/ProfilePage/types/types"

import ProfileCard from "./ProfileCard"
import ProfileIntroduction from "./ProfileIntroduction"
import ProfileTechStack from "./ProfileTechStack"

// TODO: props 타입이 undefined가 될수 있다는게 뭔가 이상함 이렇게 안하면 케찹 터짐. 해결해보기
export interface ProfileBarProps extends ProfileActionsButtonsProps {
  nickname: string | undefined
  profileImageUrl: string | undefined
  career: string | undefined
  introduction: string | undefined
  githubUrl: string | undefined
  blogUrl: string | undefined
  techStacks: TechStack[] | undefined
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
