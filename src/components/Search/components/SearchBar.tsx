import { ChangeEventHandler } from "react"

import { Input, InputProps } from "@chakra-ui/react"

interface SearchBarProps extends InputProps {
  inputValue: string
  onInput: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ inputValue, onInput, ...props }: SearchBarProps) => {
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
