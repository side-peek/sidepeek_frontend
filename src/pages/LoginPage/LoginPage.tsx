import { Box, Center, Divider, Fade, Flex } from "@chakra-ui/react"

import BackButton from "@components/BackButton/BackButton"
import LogoLink from "@components/LogoLink/LogoLink"

import CreateAccount from "./components/CreateAccount"
import LoginForm from "./components/LoginForm/LoginForm"
import SocialLogin from "./components/SocialLogin"

const LoginPage = () => {
  return (
    <Fade in={true}>
      <Center height="100vh">
        <Box
          aria-label="login container"
          width="50rem">
          <Center position="relative">
            <BackButton />
            <LogoLink logoHeight="6rem" />
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
    </Fade>
  )
}

export default LoginPage
