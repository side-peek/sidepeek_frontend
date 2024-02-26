import React from "react"

import { StackDivider, VStack } from "@chakra-ui/react"

const StyledProfileBarBox = ({ children }: React.PropsWithChildren) => {
  return (
    <VStack
      divider={<StackDivider borderColor="grey.200" />}
      w="32rem"
      bg="default">
      {children}
    </VStack>
  )
}

export default StyledProfileBarBox
