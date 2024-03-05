import { forwardRef } from "react"

import { Box, Input, InputProps } from "@chakra-ui/react"

const InputContent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Box>
      <Input
        ref={ref}
        {...props}></Input>
    </Box>
  )
})

InputContent.displayName = "InputContent"

export default InputContent
