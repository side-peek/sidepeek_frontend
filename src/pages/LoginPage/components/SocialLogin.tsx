import { FaGithub } from "react-icons/fa"

import { Box, Button, Heading, Icon } from "@chakra-ui/react"

const SocialLogin = () => {
  return (
    <>
      <Box>
        <Heading
          as="h3"
          fontSize="1.2rem"
          fontWeight="bold">
          소셜 계정으로 로그인
        </Heading>
      </Box>
      <Button
        p="3rem"
        fontSize="2.4rem"
        fontWeight="medium"
        color="white"
        backgroundColor="#000"
        borderRadius="full"
        leftIcon={
          <Icon
            as={FaGithub}
            width="3rem"
            height="3rem"
          />
        }>
        깃허브로 로그인
      </Button>
    </>
  )
}

export default SocialLogin
