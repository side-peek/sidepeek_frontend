import { useState } from "react"
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
} from "@chakra-ui/react"

const ProfileCard = () => {
  const [career, setCareer] = useState("0년차 개발자")
  return (
    <Flex
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
          fontFamily="SCDream_Bold">
          개발자입니다.
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<AiFillCaretDown />}
            w="12rem">
            {career}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setCareer("0년차 개발자")}>
              0년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("1~3년차 개발자")}>
              1~3년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("4~6년차 개발자")}>
              4~6년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("7~9년차 개발자")}>
              7~9년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("10년차 이상 개발자")}>
              10년차 이상 개발자
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
