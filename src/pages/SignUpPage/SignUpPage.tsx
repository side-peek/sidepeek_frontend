import { Box, Center, Divider, Fade, Flex } from "@chakra-ui/react"

import BackButton from "@components/BackButton/BackButton"
import LogoLink from "@components/LogoLink/LogoLink"

import LoginLink from "./components/LoginLink"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SocialSignUp from "./components/SocialSignUp"

const SignUpPage = () => {
  return (
    <Fade in={true}>
      <Center minHeight="100vh">
        <Box
          aria-label="signup container"
          width="50rem"
          py="5rem">
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
            <SignUpForm />
            <Divider />
            <SocialSignUp />
            <LoginLink />
          </Flex>
        </Box>
      </Center>
    </Fade>
  )
}

export default SignUpPage
