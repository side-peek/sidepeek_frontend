import { MdClose } from "react-icons/md"

import { Box, ButtonProps } from "@chakra-ui/react"

const CloseButton = ({ ...props }: ButtonProps) => {
  return (
    <Box
      cursor="pointer"
      pos="absolute"
      top="5px"
      left="5px"
      {...props}>
      <MdClose size="20" />
    </Box>
  )
}

export default CloseButton
