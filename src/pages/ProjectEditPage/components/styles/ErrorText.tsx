import { Text } from "@chakra-ui/react"

const ErrorText = ({ message }: { message?: string }) => {
  return (
    <Text
      as="b"
      color="red.200">
      {message}
    </Text>
  )
}

export default ErrorText
