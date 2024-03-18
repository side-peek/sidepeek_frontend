import { IoSearch } from "react-icons/io5"

import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import LogoLink from "@components/LogoLink/LogoLink"

import HeaderContainer from "./components/HeaderContainer"
import LoginButton from "./components/LoginButton"
import Menu from "./components/Menu/Menu"

const Header = () => {
  const isLoggedIn = useUserInfoData()
  return (
    <HeaderContainer>
      {/* 로고 */}
      <LogoLink logoHeight="7rem" />
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
      {isLoggedIn ? <Menu /> : <LoginButton />}
    </HeaderContainer>
  )
}

export default Header
