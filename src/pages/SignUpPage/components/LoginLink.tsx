import { Link } from "react-router-dom"

import { Box, Flex, Text } from "@chakra-ui/react"

const LoginLink = () => {
  return (
    <Flex
      pt="1.4rem"
      justifyContent="flex-end">
      <Box
        fontSize="1.2rem"
        color="blue">
        회원이신가요?
        <Link to="/login">
          <Text
            px="0.4rem"
            display="inline"
            decoration="underline">
            로그인하기
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default LoginLink
