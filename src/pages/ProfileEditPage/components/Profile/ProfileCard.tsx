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

import { ProfileInfo } from "../../types/types"
import ChangeNicknameModal from "../Modal/ChangeNicknameModal"

interface ProfileCardProps {
  nickname: string
  career: string
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}

const ProfileCard = ({
  nickname,
  career,
  setProfileInfo,
}: ProfileCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      w="100%"
      h="24rem"
      bg="default"
      ml="2rem"
      alignItems="center">
      <Avatar
        w="12rem"
        h="12rem"></Avatar>
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
            {career}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() =>
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  career: "0년차 개발자",
                }))
              }>
              0년차 개발자
            </MenuItem>
            <MenuItem
              onClick={() =>
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  career: "1~3년차 개발자",
                }))
              }>
              1~3년차 개발자
            </MenuItem>
            <MenuItem
              onClick={() =>
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  career: "4~6년차 개발자",
                }))
              }>
              4~6년차 개발자
            </MenuItem>
            <MenuItem
              onClick={() =>
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  career: "7~8년차 개발자",
                }))
              }>
              7~9년차 개발자
            </MenuItem>
            <MenuItem
              onClick={() =>
                setProfileInfo((profileInfo) => ({
                  ...profileInfo,
                  career: "10년차 이상 개발자",
                }))
              }>
              10년차 이상 개발자
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
