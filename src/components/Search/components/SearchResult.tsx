import { ReactNode } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

interface SearchResultProps extends FlexProps {
  children?: ReactNode
}

const SearchResult = ({ children, ...props }: SearchResultProps) => {
  return (
    <Flex
      position="relative"
      overflow="hidden"
      zIndex="dropdown"
      flexDir="column"
      {...props}>
      {children}
    </Flex>
  )
}

export default SearchResult
