import { ReactNode } from "react"

import { InputRightElement } from "@chakra-ui/react"

interface InsideElementProps {
  children: ReactNode
}

const InsideElement = ({ children }: InsideElementProps) => {
  return <InputRightElement>{children}</InputRightElement>
}

export default InsideElement
