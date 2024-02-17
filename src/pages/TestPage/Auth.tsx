import { useEffect } from "react"

import { Button, Center, Text } from "@chakra-ui/react"

import { AUTH_USER_TEST_DATA } from "@/constants/user"
import authToken from "@/stores/authToken"
import useAuthStore from "@/stores/useAuthStore"

const Auth = () => {
  const { user, setLogin, setLogout, updateUser } = useAuthStore()

  const handleLogin = () => {
    setLogin(AUTH_USER_TEST_DATA, "123")
  }

  const handleLogout = () => {
    setLogout()
  }

  // 추후에 useQuery로 서버에 API 호출로 변경
  useEffect(() => {
    if (authToken.getToken()) {
      updateUser(AUTH_USER_TEST_DATA)
    }
  }, [updateUser])

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
      <Text fontSize="10rem">{user.id}</Text>
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
