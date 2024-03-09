import { ReactNode } from "react"

import { Stack } from "@chakra-ui/react"

interface CommentsLayoutProps {
  children: ReactNode
}
const CommentsLayout = ({ children }: CommentsLayoutProps) => {
  return (
    <Stack
      margin="0 auto"
      w="100%"
      maxW="128rem"
      borderRadius="1rem"
      border="1px"
      borderColor="grey.400"
      direction="column"
      mt="10rem">
      {children}
    </Stack>
  )
}

export default CommentsLayout
