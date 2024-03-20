import { useNavigate } from "react-router-dom"

import { Button, Center, Text } from "@chakra-ui/react"

import errorvideo from "@assets/images/error.mp4"

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
      <video
        muted
        autoPlay
        loop
        style={{ maxWidth: "30rem" }}>
        <source
          style={{ width: "30rem", maxWidth: "30rem" }}
          src={errorvideo}
          type="video/mp4"
        />
      </video>
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
