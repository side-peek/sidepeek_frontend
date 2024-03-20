import React from "react"

import { Flex } from "@chakra-ui/react"

const StyledProfileCardBox = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex
      mt="5rem"
      mb="3rem"
      alignItems="center"
      justifyContent="center"
      direction="column">
      {children}
    </Flex>
  )
}

export default StyledProfileCardBox
