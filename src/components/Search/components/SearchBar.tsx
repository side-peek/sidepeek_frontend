import { ChangeEventHandler } from "react"

import { Input, InputProps } from "@chakra-ui/react"

interface SearchBarProps extends InputProps {
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  inputProps?: InputProps
}

const SearchBar = ({
  value,
  onChange,
  inputProps,
  ...props
}: SearchBarProps) => {
  return (
    <Input
      variant="none"
      value={value}
      onChange={onChange}
      {...inputProps}
      {...props}
    />
  )
}

export default SearchBar
