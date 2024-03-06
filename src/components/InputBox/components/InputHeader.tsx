import { ReactNode } from "react"

import { Box } from "@chakra-ui/react"

interface InputHeaderProps {
  name: string
  children: ReactNode
}

const InputHeader = ({ name, children }: InputHeaderProps) => {
  return (
    <Box>
      <label htmlFor={name}>{children}</label>
    </Box>
  )
}

export default InputHeader
