import { useNavigate } from "react-router-dom"

import { Button, Center, Img, Text } from "@chakra-ui/react"

import errorgif from "@assets/images/error.gif"

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  return (
    <Center
      w="100%"
      flexDirection="column"
      gap={20}
      position="absolute"
      top="25%">
      <Img
        w="30rem"
        minW="30rem"
        src={errorgif}
        alt="에러 페이지 움짤"
      />
      <Text
        textAlign="center"
        fontSize="4xl"
        fontFamily="SCDream_Bold">
        해당 페이지를 찾지 못했습니다.
      </Text>
      <Center>
        <Button
          bg="blue.100"
          color="white"
          size="lg"
          borderRadius="1rem"
          _hover={{ opacity: 0.5 }}
          height="5rem"
          width="15rem"
          onClick={goHome}>
          홈으로
        </Button>
      </Center>
    </Center>
  )
}

export default ErrorPage
