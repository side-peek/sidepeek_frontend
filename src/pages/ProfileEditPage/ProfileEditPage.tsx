import { useState } from "react"

import {
  Button,
  HStack,
  StackDivider,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"

import ChangePWModal from "./components/ChangePWModal"
import ProfileCard from "./components/ProfileCard"
import ProfileIntroduction from "./components/ProfileIntroduction"

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
        />
        <HStack>
          <Button
            onClick={onOpen}
            w="11rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="white"
            bg="blue.100"
            borderRadius="10px">
            비밀번호 변경
          </Button>
          <Button
            onClick={handleSubmit}
            w="11rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="white"
            bg="blue.100"
            borderRadius="10px">
            변경내용 저장
          </Button>
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
