import { Button, ButtonProps } from "@chakra-ui/react"

const LoginButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      p="3rem"
      backgroundColor="blue.100"
      color="white"
      fontSize="2.4rem"
      {...props}>
      로그인
    </Button>
  )
}

export default LoginButton
