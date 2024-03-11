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
      color="white"
      bg="blue.100"
      borderRadius="1rem"
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  )
}

export default StyledButton
