import { IoSearch } from "react-icons/io5"

import {
  Box,
  Center,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react"

import HeaderLogo from "./components/HeaderLogo"
import Menu from "./components/Menu"

const Header = () => {
  return (
    <Center height="headerHeight">
      <Flex
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="fixed"
        bg="white"
        boxShadow="md"
        flex="1"
        height="headerHeight"
        align="center"
        gap="1.6rem"
        px="1.6rem">
        {/* 로고 */}
        <Box>
          <HeaderLogo />
        </Box>
        {/* 검색창 */}
        <Box
          pl="1.5rem"
          alignSelf="end"
          pb="2rem">
          <InputGroup>
            <InputRightElement>
              <Icon
                as={IoSearch}
                w="2rem"
                h="2rem"
              />
            </InputRightElement>
            <Input
              size="lg"
              variant="flushed"
              placeholder="검색어를 입력하세요"
            />
          </InputGroup>
        </Box>
        <Spacer />
        {/* 메뉴 */}
        <Box>
          <Menu />
        </Box>
      </Flex>
    </Center>
  )
}

export default Header
