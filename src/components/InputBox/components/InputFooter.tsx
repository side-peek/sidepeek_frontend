import { Box, Text } from "@chakra-ui/react"

const InputFooter = ({ text }: { text: string }) => {
  return (
    <Box>
      <Text
        fontSize="1rem"
        color="grey">
        {text}
      </Text>
    </Box>
  )
}

export default InputFooter
