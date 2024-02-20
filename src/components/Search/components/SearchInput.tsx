import { ChangeEventHandler, FocusEventHandler, RefObject } from "react"

import { Input } from "@chakra-ui/react"

interface SearchInputProps {
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  inputRef?: RefObject<HTMLInputElement>
}

const SearchInput = ({
  value,
  onChange,
  onFocus,
  inputRef,
}: SearchInputProps) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      ref={inputRef}
    />
  )
}

export default SearchInput
