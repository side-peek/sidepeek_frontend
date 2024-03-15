import { AiFillCaretDown } from "react-icons/ai"

import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

import { CareerType, ProfileInfo } from "../../types/types"
import ChangeNicknameModal from "../Modal/ChangeNicknameModal"
import ChangeProfileImageModal from "../Modal/ChangeProfileImageModal"

interface ProfileCardProps {
  profileImageUrl: string
  nickname: string
  career: string
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}

const ProfileCard = ({
  profileImageUrl,
  nickname,
  career,
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
    "1~3년차",
    "4~6년차",
    "7~9년차",
    "10년차 이상",
  ]
  return (
    <Flex
      w="100%"
      h="24rem"
      bg="default"
      ml="2rem"
      alignItems="center">
      <form>
        <Avatar
          w="12rem"
          h="12rem"
          cursor="pointer"
          onClick={onProfileImageModalOpen}
          src={profileImageUrl}></Avatar>

        <ChangeProfileImageModal
          isOpen={isProfileImageModalOpen}
          onClose={onProfileImageModalClose}
          setProfileInfo={setProfileInfo}
        />
      </form>

      <Stack ml="1.5rem">
        <Text
          fontSize="3xl"
          fontFamily="SCDream_Bold"
          cursor="pointer"
          onClick={onNicknameModalOpen}>
          {nickname}
        </Text>
        <ChangeNicknameModal
          isOpen={isNicknameModalOpen}
          onClose={onNicknameModalClose}
          setProfileInfo={setProfileInfo}
        />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<AiFillCaretDown />}
            w="12rem">
            {career} 개발자
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
                {career} 개발자
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
