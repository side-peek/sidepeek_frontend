import { Button, ButtonProps } from "@chakra-ui/react"

const SignUpButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      p="3rem"
      backgroundColor="blue.100"
      color="white"
      fontSize="2.4rem"
      _hover={{}}
      {...props}>
      회원가입
    </Button>
  )
}

export default SignUpButton
