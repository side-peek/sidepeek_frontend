import { Text } from "@chakra-ui/react"

interface CommentsTextProps {
  text: string
}
const CommentsText = ({ text }: CommentsTextProps) => {
  return (
    <Text
      whiteSpace="pre-line"
      wordBreak="break-all"
      fontSize="lg"
      p="0.5rem">
      {text}
    </Text>
  )
}

export default CommentsText
