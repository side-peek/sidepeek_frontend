import { ReactNode } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

interface SearchResultContainerProps extends FlexProps {
  children?: ReactNode
}

const SearchResultContainer = ({ children }: SearchResultContainerProps) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      h="15rem"
      gap="5px"
      overflow="auto"
      border="1px solid"
      borderColor="grey.300"
      borderRadius="5px"
      fontSize="lg">
      {children}
    </Flex>
  )
}

export default SearchResultContainer
