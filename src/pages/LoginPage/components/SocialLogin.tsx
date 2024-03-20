import { FaGithub } from "react-icons/fa"

import { Box, Button, Heading, Icon, Link } from "@chakra-ui/react"

import { EXTERNAL_LINKS } from "@constants/externalLinks"

const SocialLogin = () => {
  return (
    <>
      <Box>
        <Heading
          as="h3"
          fontFamily="SCDream_Bold"
          fontSize="1.2rem">
          소셜 계정으로 로그인
        </Heading>
      </Box>
      <Button
        as={Link}
        href={EXTERNAL_LINKS.GITHUB_LOGIN}
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
