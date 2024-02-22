import { Input, InputProps } from "@chakra-ui/react"

import { useSearchContext } from "../stores/useSearchContext"

interface SearchBarProps extends InputProps {}

const SearchBar = ({ ...props }: SearchBarProps) => {
  const { inputValue, onInput, setIsFocused } = useSearchContext()

  return (
    <Input
      type="text"
      value={inputValue}
      onInput={onInput}
      onFocus={() => setIsFocused(true)}
      {...props}
    />
  )
}

export default SearchBar
