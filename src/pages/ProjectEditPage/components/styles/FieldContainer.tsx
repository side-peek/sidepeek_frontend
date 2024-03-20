import { PropsWithChildren } from "react"

import { Flex } from "@chakra-ui/react"

const FieldContainer = ({ children }: PropsWithChildren) => (
  <Flex
    gap="5px"
    pos="relative"
    border="2px solid"
    borderColor="grey.300"
    borderRadius="1rem"
    padding="5rem"
    overflow="scroll">
    {children}
  </Flex>
)

export default FieldContainer
