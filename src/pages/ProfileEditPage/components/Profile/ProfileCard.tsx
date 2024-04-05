import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown"
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"

import { CareerType, JobType, ProfileInfo } from "../../types/types"
import ChangeNicknameModal from "../Modal/ChangeNicknameModal"
import ChangeProfileImageModal from "../Modal/ChangeProfileImageModal"

interface ProfileCardProps {
  profileImageUrl: string
  nickname: string
  career: string
  job: string
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}

const ProfileCard = ({
  profileImageUrl,
  nickname,
  career,
  job = "",
  setProfileInfo,
}: ProfileCardProps) => {
  const {
    isOpen: isNicknameModalOpen,
    onOpen: onNicknameModalOpen,
    onClose: onNicknameModalClose,
  } = useDisclosure()
  const {
    isOpen: isProfileImageModalOpen,
    onOpen: onProfileImageModalOpen,
    onClose: onProfileImageModalClose,
  } = useDisclosure()

  const careers: CareerType[] = [
    "0년차",
    "1-3년차",
    "4-6년차",
    "7-9년차",
    "10년차 이상",
  ]

  const jobs: JobType[] = [
    "백엔드 개발자",
    "프론트엔드 개발자",
    "IOS 개발자",
    "안드로이드 개발자",
    "디자이너",
    "데이터 분석가",
    "기타",
  ]
  return (
    <Flex
      w="100%"
      h="24rem"
      bg="default"
      ml="2rem"
      alignItems="center">
      <Box
        position="relative"
        cursor="pointer"
        onClick={onProfileImageModalOpen}>
        <Avatar
          w="12rem"
          h="12rem"
          src={profileImageUrl}></Avatar>
        <Flex
          position="absolute"
          alignItems="center"
          justifyContent="center"
          bottom="-0.3rem"
          right="-0.5rem"
          w="4.5rem"
          h="4.5rem"
          bg="blue.100"
          borderRadius="50%"
          border="0.3rem solid"
          borderColor="default">
          <Icon
            as={FaPlus}
            w="2.2rem"
            h="2.2rem"
            color="default"></Icon>
        </Flex>
      </Box>

      <ChangeProfileImageModal
        isOpen={isProfileImageModalOpen}
        onClose={onProfileImageModalClose}
        setProfileInfo={setProfileInfo}
      />

      <Stack ml="1.5rem">
        <Flex
          direction="row"
          alignItems="center"
          gap="0.5rem"
          cursor="pointer"
          onClick={onNicknameModalOpen}>
          <Text
            fontSize="3xl"
            fontFamily="SCDream_Bold">
            {nickname}
          </Text>
          <Icon
            mb="0.4rem"
            as={AiFillEdit}
            fontSize="3.3rem"></Icon>
        </Flex>

        <ChangeNicknameModal
          isOpen={isNicknameModalOpen}
          onClose={onNicknameModalClose}
          setProfileInfo={setProfileInfo}
        />
        <Flex
          direction="column"
          gap="0.5rem">
          <Menu>
            <MenuButton
              as={Button}
              border="1px solid"
              borderColor="grey.300"
              rightIcon={<AiFillCaretDown />}
              w="13rem">
              {career === "" ? "연차" : career}
            </MenuButton>
            <MenuList>
              {careers.map((career) => (
                <MenuItem
                  key={career}
                  onClick={() =>
                    setProfileInfo((profileInfo) => ({
                      ...profileInfo,
                      career: career,
                    }))
                  }>
                  {career}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              border="1px solid"
              borderColor="grey.300"
              rightIcon={<AiFillCaretDown />}
              w="13rem">
              {job === "" ? "직업" : job}
            </MenuButton>
            <MenuList>
              {jobs.map((job) => (
                <MenuItem
                  key={job}
                  onClick={() =>
                    setProfileInfo((profileInfo) => ({
                      ...profileInfo,
                      job: job,
                    }))
                  }>
                  {job}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
