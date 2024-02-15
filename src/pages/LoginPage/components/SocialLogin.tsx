import { Box, Button, Heading, Image } from "@chakra-ui/react"

import GithubSVG from "@assets/svgs/github.svg"

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
        p="2rem"
        fontSize="2rem"
        color="white"
        leftIcon={
          <Image
            src={GithubSVG}
            alt="github icon"
            w={26}
            h={26}
          />
        }
        backgroundColor="#000"
        borderRadius="full">
        깃허브로 로그인
      </Button>
    </>
  )
}

export default SocialLogin
