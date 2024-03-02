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
      h="30rem"
      bg="default"
      alignItems="center"
      ml="2rem">
      <Avatar
        w="12rem"
        h="12rem"></Avatar>
      <Stack
        ml="2rem"
        bg="red"
        w="30rem">
        <Text
          fontSize="3xl"
          fontFamily="SCDream_Bold">
          개발자
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<AiFillCaretDown />}
            w="50%">
            {career}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setCareer("0년차 개발자")}>
              0년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("1~2년차 개발자")}>
              1~2년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("2~3년차 개발자")}>
              2~3년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("3~5년차 개발자")}>
              3~5년차 개발자
            </MenuItem>
            <MenuItem onClick={() => setCareer("5년차 이상 개발자")}>
              5년차 이상 개발자
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  )
}

export default ProfileCard
