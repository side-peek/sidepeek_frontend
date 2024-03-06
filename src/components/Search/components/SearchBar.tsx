import { ChangeEventHandler } from "react"

import { Input, InputProps } from "@chakra-ui/react"

interface SearchBarProps extends Omit<InputProps, "onChange" | "onInput"> {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ value, onChange, ...props }: SearchBarProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      border="none"
      {...props}
    />
  )
}

export default SearchBar
