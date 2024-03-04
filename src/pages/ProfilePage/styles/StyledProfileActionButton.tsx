import React from "react"

import { Button } from "@chakra-ui/react"

interface StyledButtonProps {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = ({ children, onClick, ...props }: StyledButtonProps) => {
  return (
    <Button
      w="11rem"
      h="3.5rem"
      fontSize="1.3rem"
      color="default"
      bg="blue.100"
      borderRadius="1rem"
      _hover={{ bg: "blue.100" }}
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  )
}

export default StyledButton
