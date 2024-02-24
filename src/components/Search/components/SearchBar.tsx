import { Input, InputProps } from "@chakra-ui/react"

import { useSearchContext } from "../stores/useSearchContext"

interface SearchBarProps extends InputProps {}

const SearchBar = ({ ...props }: SearchBarProps) => {
  const { inputValue, onInput } = useSearchContext()

  return (
    <Input
      type="text"
      value={inputValue}
      onInput={onInput}
      {...props}
    />
  )
}

export default SearchBar
