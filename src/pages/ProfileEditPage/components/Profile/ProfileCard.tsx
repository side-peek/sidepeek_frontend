import { AiFillCaretDown } from "react-icons/ai"

import {
  Avatar,
  Button,
  Flex,
  Input,
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 1. 파일 -> url api 요청 / 2. setState
    if (e.target.files) {
      console.log(e.target.files[0])
    }
  }

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
        <label>
          <Avatar
            w="12rem"
            h="12rem">
            {profileImageUrl}
          </Avatar>
          <Input
            type="file"
            display="none"
            onChange={handleSubmit}
          />
        </label>
      </form>

      <Stack ml="1.5rem">
        <Text
          fontSize="3xl"
          fontFamily="SCDream_Bold"
          onClick={onOpen}>
          {nickname}
        </Text>
        <ChangeNicknameModal
          isOpen={isOpen}
          onClose={onClose}
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
