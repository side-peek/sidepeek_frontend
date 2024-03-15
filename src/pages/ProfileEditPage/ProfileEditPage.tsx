import { useState } from "react"

import {
  Flex,
  StackDivider,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"

import ChangePWModal from "./components/Modal/ChangePWModal"
import ProfileCard from "./components/Profile/ProfileCard"
import ProfileIntroduction from "./components/Profile/ProfileIntroduction"
import ProfileTechStack from "./components/Profile/ProfileTechStack"
import StyledButton from "./styles/StyledButton"
import { ProfileInfo } from "./types/types"

const ProfileEditPage = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    profileImageUrl: "",
    nickname: "개발자",
    career: "0년차",
    introduction: "",
    job: "",
    githubUrl: "",
    blogUrl: "",
    techStacks: [],
  })

  const handleUpdateProfile = () => {
    // TODO: 프로필 정보를 저장하는 api 요청
    console.log(profileInfo)
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
          setProfileInfo={setProfileInfo}
        />
        <ProfileIntroduction
          introduction={profileInfo.introduction}
          githubUrl={profileInfo.githubUrl}
          blogUrl={profileInfo.blogUrl}
          setProfileInfo={setProfileInfo}
        />
        <ProfileTechStack setProfileInfo={setProfileInfo} />
      </VStack>

      <Flex
        w="100%"
        gap="0.5rem"
        justifyContent={isLargerThan500 ? "flex-end" : "center"}>
        <StyledButton onClick={onOpen}>비밀번호 변경</StyledButton>
        <StyledButton onClick={handleUpdateProfile}>변경내용 저장</StyledButton>
        <ChangePWModal
          isOpen={isOpen}
          onClose={onClose}
        />
      </Flex>
    </VStack>
  )
}

export default ProfileEditPage
