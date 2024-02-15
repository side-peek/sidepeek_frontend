import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react"

const LoginForm = () => {
  return (
    <>
      {/* 로그인 입력 양식 */}
      {/* email */}
      <FormControl>
        <FormLabel>
          <Flex align="center">
            <Text
              px="0.8rem"
              fontSize="1.2rem"
              fontWeight="bold">
              이메일
            </Text>
            <Spacer />
            {/* <FormHelperText>이곳은 에러메세지 자리입니다.</FormHelperText> */}
          </Flex>
        </FormLabel>
        <Input
          type="email"
          height="5rem"
          fontSize="2rem"
        />
      </FormControl>
      {/* paasword */}
      <FormControl>
        <FormLabel>
          <Flex align="center">
            <Text
              px="0.8rem"
              fontSize="1.2rem"
              fontWeight="bold">
              비밀번호
            </Text>
            <Spacer />
            {/* <FormHelperText>이곳은 에러메세지 자리입니다.</FormHelperText> */}
          </Flex>
        </FormLabel>
        <Input
          type="password"
          height="5rem"
          fontSize="2rem"
        />
      </FormControl>
      <Button
        p="3rem"
        backgroundColor="blue.100"
        color="white"
        fontSize="2.4rem">
        로그인
      </Button>
    </>
  )
}

export default LoginForm
