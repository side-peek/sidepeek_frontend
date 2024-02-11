import { useNavigate } from "react-router-dom"

import { Button, Center, Flex, Img, Text } from "@chakra-ui/react"

import errorgif from "@assets/images/error.gif"

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={20}
      position="absolute"
      top="50%"
      left="50%"
      transform="translateX(-50%) translateY(-50%)">
      <Img
        w="30rem"
        minW="30rem"
        src={errorgif}
        alt="에러 페이지 움짤"
      />
      <Text
        textAlign="center"
        fontSize="4xl"
        fontWeight="extrabold">
        해당 페이지를 찾지 못했습니다.
      </Text>
      <Center>
        <Button
          bg="#0C356A"
          color="white"
          size="lg"
          borderRadius="1rem"
          _hover={{ opacity: 0.5 }}
          fontWeight={"extrabold"}
          height="5rem"
          width="15rem"
          onClick={goHome}>
          홈으로
        </Button>
      </Center>
    </Flex>
  )
}

export default ErrorPage
