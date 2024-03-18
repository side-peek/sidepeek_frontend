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
  useMediaQuery,
} from "@chakra-ui/react"

import { CareerType, ProfileInfo } from "../../types/types"
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
  job,
  setProfileInfo,
}: ProfileCardProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
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
  return (
    <Flex
      w="100%"
      h="24rem"
      bg="default"
      ml="2rem"
      alignItems="center">
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
        <Flex direction={isLargerThan500 ? "row" : "column"}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<AiFillCaretDown />}
              w="9rem">
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
          <Input
            pl="0.5rem"
            variant="flushed"
            height="2.5rem"
            value={job}
            placeholder="직업을 입력해주세요"
            ml="0.5rem"
            w="12rem"
            onChange={(e) =>
              setProfileInfo((profileInfo) => ({
                ...profileInfo,
                job: e.target.value,
              }))
            }
          />
        </Flex>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
