import { ReactNode } from "react"

import { Flex } from "@chakra-ui/react"

interface CommentsLayoutProps {
  children: ReactNode
}
const CommentsLayout = ({ children }: CommentsLayoutProps) => {
  return (
    <Flex
      margin="0 auto"
      w="50%"
      maxW="128rem"
      borderRadius="1rem"
      border="1px"
      borderColor="grey.400"
      direction="column"
      mt="10rem">
      {children}
    </Flex>
  )
}

export default CommentsLayout
