import { Link, useNavigate } from "react-router-dom"

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react"

import GithubSVG from "@assets/svgs/github.svg"
import BackSpaceSVG from "@assets/svgs/keyboard_backspace.svg"
import SidePeekSVG from "@assets/svgs/sidepeek_logo.svg"

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <Center h="full">
      <Box
        position="relative"
        w="30rem">
        <Button
          position="absolute"
          top="0"
          left="0"
          w="3rem"
          h="2rem"
          p="0rem"
          background="transparent"
          onClick={() => navigate(-1)}>
          <Image
            src={BackSpaceSVG}
            alt="backspace"
          />
        </Button>
        <Flex
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="stretch">
          <Center>
            <Link to="/">
              <AspectRatio
                w="15rem"
                ratio={5 / 1.3}>
                <Image
                  src={SidePeekSVG}
                  alt="side-peek logo"
                />
              </AspectRatio>
            </Link>
          </Center>
          {/* 로그인 입력 양식 */}
          {/* email */}
          <FormControl>
            <FormLabel>
              <Flex align="center">
                <Text
                  px=".8rem"
                  fontSize="1.2rem"
                  fontWeight="bold">
                  이메일
                </Text>
                <Spacer />
                {/* <FormHelperText>이곳은 에러메세지 자리입니다.</FormHelperText> */}
              </Flex>
            </FormLabel>
            <Input type="email" />
          </FormControl>
          {/* paasword */}
          <FormControl>
            <FormLabel>
              <Flex align="center">
                <Text
                  px=".8rem"
                  fontSize="1.2rem"
                  fontWeight="bold">
                  비밀번호
                </Text>
                <Spacer />
                {/* <FormHelperText>이곳은 에러메세지 자리입니다.</FormHelperText> */}
              </Flex>
            </FormLabel>
            <Input type="password" />
          </FormControl>
          <Button
            p="2rem"
            colorScheme="blue"
            fontSize="1.8rem">
            로그인
          </Button>
          <Divider />
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
          <Flex
            pt="1.4rem"
            justifyContent="flex-end">
            <Box
              fontSize="1.2rem"
              color="blue">
              회원이 아니신가요?
              <Link to="/signup">
                <Text
                  px="0.4rem"
                  display="inline"
                  decoration="underline">
                  회원가입
                </Text>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Center>
  )
}

export default LoginPage
