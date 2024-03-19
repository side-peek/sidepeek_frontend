import { Button, ButtonProps } from "@chakra-ui/react"

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      p="2rem"
      backgroundColor="blue.100"
      color="white"
      fontSize="1.8rem"
      _hover={{}}
      {...props}>
      확인
    </Button>
  )
}

export default SubmitButton
