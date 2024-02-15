import { Button, Center } from "@chakra-ui/react"

import { AUTH_USER_TEST_DATA } from "@/constants/user"
import useAuthStore from "@/stores/useAuthStore"

const Auth = () => {
  const { user, setLogin, setLogout } = useAuthStore()
  console.log(user)

  const handleLogin = () => {
    setLogin(AUTH_USER_TEST_DATA, "123")
  }

  const handleLogout = () => {
    setLogout()
  }

  return (
    <Center gap={2}>
      <Button
        bg="blue.100"
        color="white"
        size="lg"
        borderRadius="1rem"
        _hover={{ opacity: 0.5 }}
        height="5rem"
        width="15rem"
        onClick={handleLogin}>
        로그인
      </Button>
      <Button
        bg="blue.100"
        color="white"
        size="lg"
        borderRadius="1rem"
        _hover={{ opacity: 0.5 }}
        height="5rem"
        width="15rem"
        onClick={handleLogout}>
        로그아웃
      </Button>
    </Center>
  )
}

export default Auth
