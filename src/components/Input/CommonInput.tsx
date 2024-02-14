import { AiOutlineSearch } from "react-icons/ai"

import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"

import { CommonInputProps } from "./types/types"

const CommonInput = ({
  // isInvalid = false,
  width = "20rem",
  size = "md",
  register,
  required,
  placeholder,
  variant = "outline",
  stackStyle,
  type,
  borderRadius = "0rem",
  ...rest
}: CommonInputProps) => {
  return (
    <Stack style={stackStyle}>
      <InputGroup width={width}>
        <Input
          // paddingLeft="1rem"
          // isInvalid={isInvalid}
          size={size}
          variant={variant}
          placeholder={placeholder}
          required={required}
          type={type}
          borderRadius={borderRadius}
          _focus={{ boxShadow: "none", borderColor: "black" }}
          {...register}
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
