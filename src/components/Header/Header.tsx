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

import LogoButton from "@components/LogoButton/LogoButton"

import Menu from "./components/Menu"

const Header = () => {
  return (
    <Center
      w="100%"
      position="sticky"
      bg="white"
      boxShadow="md">
      <Flex
        flex="1"
        h="headerHeight"
        maxW="1280px"
        align="center"
        gap="1.6rem"
        px="1.6rem">
        {/* 로고 */}
        <LogoButton logoHeight="7rem" />
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
