import { Link } from "react-router-dom"

import { Button, Text } from "@chakra-ui/react"

const LoginButton = () => {
  return (
    <Button
      as={Link}
      to="/login"
      bgColor="blue.200"
      p="2rem">
      <Text
        fontFamily="SCDream_Regular"
        fontSize="2rem"
        color="white">
        Login
      </Text>
    </Button>
  )
}

export default LoginButton
