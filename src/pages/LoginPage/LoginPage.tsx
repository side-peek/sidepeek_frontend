import { Box, Center, Divider, Flex } from "@chakra-ui/react"

import LogoButton from "@components/LogoButton/LogoButton"

import BackButton from "./components/BackButton"
import LoginForm from "./components/LoginForm"
import SignUpNav from "./components/SignUpNav"
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
          <SignUpNav />
        </Flex>
      </Box>
    </Center>
  )
}

export default LoginPage
