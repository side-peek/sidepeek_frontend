import { useState } from "react"

import {
  Flex,
  StackDivider,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"

import ChangePWModal from "./components/ChangePWModal"
import ProfileCard from "./components/ProfileCard"
import ProfileIntroduction from "./components/ProfileIntroduction"
// import ProfileTechStack from "./components/ProfileTechStack"
import StyledButton from "./styles/StyledButton"

const ProfileEditPage = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
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
    <VStack
      w="80%"
      h="100vh"
      align="start"
      m="auto">
      <VStack
        w="100%"
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
        {/* TODO: 기술스택 컴포넌트 완성되면 추가 예정임 */}
        {/* <ProfileTechStack /> */}
      </VStack>

      <Flex
        w="100%"
        gap="0.5rem"
        justifyContent={isLargerThan500 ? "flex-end" : "center"}>
        <StyledButton onClick={onOpen}>비밀번호 변경</StyledButton>
        <StyledButton onClick={handleSubmit}>변경내용 저장</StyledButton>
        <ChangePWModal
          isOpen={isOpen}
          onClose={onClose}
        />
      </Flex>
    </VStack>
  )
}

export default ProfileEditPage
