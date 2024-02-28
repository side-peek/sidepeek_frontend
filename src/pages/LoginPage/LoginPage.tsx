import { Box, Center, Divider, Flex } from "@chakra-ui/react"

import LogoButton from "@components/LogoLink/LogoLink"

import BackButton from "./components/BackButton"
import CreateAccount from "./components/CreateAccount"
import LoginForm from "./components/LoginForm/LoginForm"
import SocialLogin from "./components/SocialLogin"

const LoginPage = () => {
  return (
    <Center height="100vh">
      <Box
        aria-label="login container"
        position="relative"
        width="50rem">
        <BackButton />
        <Center>
          <LogoButton logoHeight="6rem" />
        </Center>
        <Flex
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="stretch"
          padding="2rem">
          <LoginForm />
          <Divider />
          <SocialLogin />
          <CreateAccount />
        </Flex>
      </Box>
    </Center>
  )
}

export default LoginPage
