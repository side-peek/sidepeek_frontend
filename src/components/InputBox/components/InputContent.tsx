import { Box, Input, InputProps } from "@chakra-ui/react"

const InputContent = ({ ...props }: InputProps) => {
  return (
    <Box>
      <Input {...props}></Input>
    </Box>
  )
}

export default InputContent
