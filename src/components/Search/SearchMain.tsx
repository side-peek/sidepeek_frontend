import { ReactNode } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

import SearchBar from "./components/SearchBar"
import SearchResult from "./components/SearchResult"
import { useOutsideClick } from "./hooks/useOutsideClick"
import { SearchContext } from "./stores/SearchContext/SearchContext"

interface SearchLayoutProps extends BoxProps {
  children: ReactNode
}

const SearchMain = ({ children, ...props }: SearchLayoutProps) => {
  const [ref, isFocused] = useOutsideClick<HTMLDivElement>()
  return (
    <SearchContext.Provider value={{ isFocused }}>
      <Box
        ref={ref}
        {...props}>
        {children}
      </Box>
    </SearchContext.Provider>
  )
}

const SearchBox = Object.assign(SearchMain, {
  Input: SearchBar,
  Result: SearchResult,
})

export default SearchBox
