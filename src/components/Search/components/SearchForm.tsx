import { ChangeEventHandler } from "react"

import { Input } from "@chakra-ui/react"

interface SearchFormProps {
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchInput = ({ value, onChange }: SearchFormProps) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchInput
