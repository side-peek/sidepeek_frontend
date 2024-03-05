import React from "react"

import { Flex } from "@chakra-ui/react"

const StyledProfileCardBox = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex
      minH="36rem"
      alignItems="center"
      justifyContent="center"
      direction="column">
      {children}
    </Flex>
  )
}

export default StyledProfileCardBox
