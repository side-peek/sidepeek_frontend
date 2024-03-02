import { useState } from "react"

import { HStack, StackDivider, VStack, useDisclosure } from "@chakra-ui/react"

import ChangePWModal from "./components/ChangePWModal"
import ProfileCard from "./components/ProfileCard"
import ProfileIntroduction from "./components/ProfileIntroduction"
import StyledButton from "./styles/StyledButton"

const ProfileEditPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profileInfo, setProfileInfo] = useState({
    career: "0년차 개발자",
    introduction: "",
    githubUrl: "",
    blogUrl: "",
  })

  const handleSubmit = () => {
    // TODO: 프로필 정보를 저장하는 api 요청
    console.log(profileInfo)
  }
  return (
    <>
      <VStack
        w="80%"
        h="100vh"
        align="start"
        m="auto"
        divider={<StackDivider borderColor="grey.100" />}>
        <ProfileCard
          career={profileInfo.career}
          setProfileInfo={setProfileInfo}
        />
        <ProfileIntroduction
          introduction={profileInfo.introduction}
          githubUrl={profileInfo.githubUrl}
          blogUrl={profileInfo.blogUrl}
          setProfileInfo={setProfileInfo}
        />
        <HStack>
          <StyledButton onClick={onOpen}>비밀번호 변경</StyledButton>
          <StyledButton onClick={handleSubmit}>변경내용 저장</StyledButton>
          <ChangePWModal
            isOpen={isOpen}
            onClose={onClose}
          />
        </HStack>
      </VStack>
    </>
  )
}

export default ProfileEditPage
