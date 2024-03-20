import { ReactNode } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

interface SearchResultProps extends FlexProps {
  isFocused?: boolean
  children?: ReactNode
}

const SearchResult = ({
  isFocused = true,
  children,
  ...props
}: SearchResultProps) => {
  if (!isFocused) {
    return null
  }

  return (
    <Flex
      position="relative"
      overflow="hidden"
      zIndex="dropdown"
      flexDir="column"
      cursor="pointer"
      {...props}>
      {children}
    </Flex>
  )
}

export default SearchResult
