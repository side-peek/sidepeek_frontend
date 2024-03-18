import { ReactNode } from "react"

import { Center, Flex } from "@chakra-ui/react"

interface HeaderContainerProps {
  children: ReactNode
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
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
        {children}
      </Flex>
    </Center>
  )
}

export default HeaderContainer
