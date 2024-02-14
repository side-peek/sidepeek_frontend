import { AiOutlineSearch } from "react-icons/ai"

import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"

import { CommonInputProps } from "./types/types"

const CommonInput = ({
  type,
  required,
  register,
  variant = "outline",
  width = "20rem",
  size = "md",
  borderRadius = "0rem",
  placeholder,
  stackStyle,
  ...rest
}: CommonInputProps) => {
  return (
    <Stack style={stackStyle}>
      <InputGroup width={width}>
        <Input
          type={type}
          required={required}
          {...register}
          size={size}
          variant={variant}
          placeholder={placeholder}
          borderRadius={borderRadius}
          borderColor="black.400"
          _focus={{ boxShadow: "none", borderColor: "black.100" }}
          {...rest}></Input>
        <InputRightElement
          pointerEvents="none"
          paddingTop="1rem"
          fontSize="1.5rem"
          color="red">
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
    </Stack>
  )
}

export default CommonInput
