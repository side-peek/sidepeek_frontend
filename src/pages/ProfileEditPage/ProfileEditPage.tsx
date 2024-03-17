import { useState } from "react"

import {
  Flex,
  StackDivider,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"
import { UserInfoProperties } from "api-models"

import ChangePWModal from "./components/Modal/ChangePWModal"
import ProfileCard from "./components/Profile/ProfileCard"
import ProfileIntroduction from "./components/Profile/ProfileIntroduction"
import ProfileTechStack from "./components/Profile/ProfileTechStack"
import usePutUserDetailMutation from "./hooks/mutation/usePutUserDetailMutation"
import { useUserInfo } from "./hooks/query/useUserInfo"
import StyledButton from "./styles/StyledButton"
import { ProfileInfo } from "./types/types"

const ProfileEditPage = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const data = useUserInfoData()
  const userId = Number(data?.id)
  const { data: userInfoDetail } = useUserInfo(userId)
  const userDetail = userInfoDetail as UserInfoProperties

  const processedTechStacks = userDetail.techStacks.map(
    ({ category, skill }) => {
      const obj = { category: category, skillId: skill.id }
      return obj
    },
  )

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    profileImageUrl: userDetail.profileImageUrl,
    nickname: userDetail.nickname,
    career: userDetail.career,
    introduction: userDetail.introduction,
    job: userDetail.job,
    githubUrl: userDetail.githubUrl,
    blogUrl: userDetail.blogUrl,
    techStacks: processedTechStacks,
  })

  console.log(profileInfo)

  const { putUserDetailMutation } = usePutUserDetailMutation(userId)

  const handleUpdateProfile = () => {
    // TODO: 프로필 정보를 저장하는 api 요청
    console.log(profileInfo)
    putUserDetailMutation.mutate({ userId: userId, userInfo: profileInfo })
  }

  return (
    <VStack
      w="80%"
      align="start"
      m="auto">
      <VStack
        w="100%"
        divider={<StackDivider borderColor="grey.100" />}>
        <ProfileCard
          profileImageUrl={profileInfo.profileImageUrl}
          nickname={profileInfo.nickname}
          career={profileInfo.career}
          job={profileInfo.job}
          setProfileInfo={setProfileInfo}
        />
        <ProfileIntroduction
          introduction={profileInfo.introduction}
          githubUrl={profileInfo.githubUrl}
          blogUrl={profileInfo.blogUrl}
          setProfileInfo={setProfileInfo}
        />

        <ProfileTechStack
          techStacks={userDetail.techStacks}
          setProfileInfo={setProfileInfo}
        />
      </VStack>

      <Flex
        w="100%"
        gap="0.5rem"
        justifyContent={isLargerThan500 ? "flex-end" : "center"}
        mt="1.5rem"
        mb="3rem">
        <StyledButton onClick={onOpen}>비밀번호 변경</StyledButton>
        <StyledButton onClick={handleUpdateProfile}>변경내용 저장</StyledButton>
        <ChangePWModal
          isOpen={isOpen}
          onClose={onClose}
          userId={userId}
        />
      </Flex>
    </VStack>
  )
}

export default ProfileEditPage
