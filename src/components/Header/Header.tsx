import { IoSearch } from "react-icons/io5"
import { Link as ReactRouterLink } from "react-router-dom"

import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
} from "@chakra-ui/react"

import SidePeekLogoSVG from "@assets/svgs/sidepeek_logo.svg"

import Menu from "./components/Menu"

const Header = () => {
  return (
    <Center
      w="100%"
      position="fixed"
      bg="#fff"
      boxShadow="md">
      <Flex
        flex="1"
        h="headerHeight"
        maxW="1280px"
        align="center"
        gap="1.6rem"
        px="1.6rem">
        {/* 로고 */}
        <Link
          as={ReactRouterLink}
          to="/">
          <Image
            src={SidePeekLogoSVG}
            alt="side peek logo"
          />
        </Link>
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
