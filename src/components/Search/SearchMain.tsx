import { ReactNode, forwardRef } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

import SearchBar from "./components/SearchBar"
import SearchResult from "./components/SearchResult"

interface SearchLayoutProps extends BoxProps {
  children: ReactNode
}

const SearchMain = forwardRef(
  ({ children, ...props }: SearchLayoutProps, ref) => {
    return (
      <Box
        ref={ref}
        borderRadius="0.5rem"
        backgroundColor="white"
        {...props}>
        {children}
      </Box>
    )
  },
)

SearchMain.displayName = "SearchMain"

const SearchBox = Object.assign(SearchMain, {
  Input: SearchBar,
  Result: SearchResult,
})

export default SearchBox
