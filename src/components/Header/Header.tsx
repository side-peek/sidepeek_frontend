import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react"
import { IoSearch } from "@react-icons/all-files/io5/IoSearch"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import LogoLink from "@components/LogoLink/LogoLink"

import HeaderContainer from "./components/HeaderContainer"
import LoginButton from "./components/LoginButton"
import Menu from "./components/Menu/Menu"

const Header = () => {
  const navigate = useNavigate()
  const isLoggedIn = useUserInfoData()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current) {
      navigate(`/project?search=${inputRef.current.value}`)
      inputRef.current.value = ""
    }
  }

  return (
    <HeaderContainer>
      <LogoLink logoHeight="7rem" />
      <Box>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Icon
                as={IoSearch}
                w="2rem"
                h="2rem"
              />
            </InputRightElement>
            <Input
              ref={inputRef}
              size="lg"
              variant="flushed"
              placeholder="검색어를 입력하세요"
            />
          </InputGroup>
        </form>
      </Box>
      <Spacer />
      {isLoggedIn ? <Menu /> : <LoginButton />}
    </HeaderContainer>
  )
}

export default Header
