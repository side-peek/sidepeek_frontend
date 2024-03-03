import { Button } from "@chakra-ui/button"
import { Center } from "@chakra-ui/layout"

import { useMutation } from "@tanstack/react-query"

import { postEmailRefresh } from "@/api/auth/postEmailRefresh"

const TestPage = () => {
  // const axiosError = new AxiosError<string, string>("에러", "CUSTOM_ERROR")
  const { mutate } = useMutation({
    mutationFn: () => postEmailRefresh({ refreshToken: "" }),
  })

  return (
    <Center>
      <Button onClick={() => mutate()}>에러!</Button>
    </Center>
  )
}

export default TestPage
