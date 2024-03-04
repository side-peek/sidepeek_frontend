import { ReactNode } from "react"

import { Flex, FlexProps } from "@chakra-ui/react"

import { useSearchContext } from "../stores/useSearchContext"

interface SearchResultProps extends FlexProps {
  children?: ReactNode
}

const SearchResult = ({ children, ...props }: SearchResultProps) => {
  const { isFocused } = useSearchContext()

  if (!isFocused) {
    return null
  }

  return (
    <Flex
      flexDir="column"
      {...props}>
      {children}
    </Flex>
  )
}

export default SearchResult
