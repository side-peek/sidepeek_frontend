import React, { ForwardedRef, PropsWithChildren } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

const FieldContainer = React.forwardRef(
  (
    { children, ...props }: PropsWithChildren<FlexProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Flex
      ref={ref}
      gap="5px"
      pos="relative"
      border="2px solid"
      borderColor="grey.300"
      borderRadius="1rem"
      padding="5rem"
      {...props}>
      {children}
    </Flex>
  ),
)

FieldContainer.displayName = "FieldContainer"

export default FieldContainer
