import { PropsWithChildren } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

const FieldContainer = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => (
  <Flex
    gap="5px"
    pos="relative"
    border="2px solid"
    borderColor="grey.300"
    borderRadius="1rem"
    padding="5rem"
    {...props}>
    {children}
  </Flex>
)

export default FieldContainer
