import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  Spacer,
  Flex,
} from "@chakra-ui/react"
import Menu from "./components/Menu"
import { Search2Icon } from "@chakra-ui/icons"

const Header = () => {
  return (
    <Center bg="#fff">
      <Flex
        flex="1"
        h="6rem"
        maxW="1280px"
        align="center"
        gap="1.6rem"
        px="1.6rem">
        {/* 로고 */}
        <Button
          h="4rem"
          p="1.2rem"
          fontSize="2.4rem"
          colorScheme="purple">
          사이드픽
        </Button>
        {/* 검색창 */}
        <Center>
          <InputGroup>
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
            <Input
              variant="flushed"
              placeholder="검색어를 입력하세요"
            />
          </InputGroup>
        </Center>
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
