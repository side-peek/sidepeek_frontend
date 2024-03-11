import { ReactNode } from "react"

import { Stack, Text } from "@chakra-ui/react"

interface CommentsLayoutProps {
  children: ReactNode
}
const CommentsLayout = ({ children }: CommentsLayoutProps) => {
  return (
    <Stack gap="2rem">
      <Text
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        댓글
      </Text>
      <Stack
        margin="0 auto"
        w="100%"
        maxW="128rem"
        borderRadius="1rem"
        border="1px"
        borderColor="grey.400"
        direction="column">
        {children}
      </Stack>
    </Stack>
  )
}

export default CommentsLayout
