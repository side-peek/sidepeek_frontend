import { ReactNode } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

import SearchBar from "./components/SearchBar"
import SearchResult from "./components/SearchResult"

interface SearchLayoutProps extends BoxProps {
  children: ReactNode
}

const SearchMain = ({ children, ...props }: SearchLayoutProps) => {
  return (
    <Box
      borderRadius="0.5rem"
      backgroundColor="white"
      {...props}>
      {children}
    </Box>
  )
}

const SearchBox = Object.assign(SearchMain, {
  Input: SearchBar,
  Result: SearchResult,
})

export default SearchBox
