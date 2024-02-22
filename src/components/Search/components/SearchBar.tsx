import { Input, InputProps } from "@chakra-ui/react"

import { useOutsideClick } from "../hooks/useOutsideClick"
import { useSearchContext } from "../stores/useSearchContext"

interface SearchBarProps extends InputProps {}

const SearchBar = ({ ...props }: SearchBarProps) => {
  const { inputValue, onInput, setIsFocused } = useSearchContext()
  const targetRef = useOutsideClick<HTMLInputElement>(() => setIsFocused(false))

  return (
    <Input
      type="text"
      value={inputValue}
      ref={targetRef}
      onInput={onInput}
      onFocus={() => setIsFocused(true)}
      {...props}
    />
  )
}

export default SearchBar
