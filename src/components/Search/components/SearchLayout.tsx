import { Box, BoxProps } from "@chakra-ui/react"

interface SearchLayoutProps extends BoxProps {}

const SearchLayout = ({ ...props }: SearchLayoutProps) => {
  return <Box {...props}></Box>
}

export default SearchLayout
