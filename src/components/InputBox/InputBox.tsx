import { ReactNode } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

import InputContent from "./components/InputContent"
import InputFooter from "./components/InputFooter"
import InputLabel from "./components/InputHeader"

interface InputBoxMainProps extends FlexProps {
  children: ReactNode
}

const InputBoxMain = ({ children, ...props }: InputBoxMainProps) => {
  return (
    <Flex
      flexDir="column"
      {...props}>
      {children}
    </Flex>
  )
}

export const InputBox = Object.assign(InputBoxMain, {
  Header: InputLabel,
  Content: InputContent,
  Footer: InputFooter,
})
