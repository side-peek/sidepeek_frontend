import { forwardRef } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

interface SearchLayoutProps extends BoxProps {}

const SearchLayout = forwardRef<HTMLDivElement, SearchLayoutProps>(
  ({ ...props }, ref) => {
    return (
      <Box
        {...props}
        ref={ref}></Box>
    )
  },
)

SearchLayout.displayName = "SearchLayout"

export default SearchLayout
