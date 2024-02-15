import { Input, InputGroup, Stack } from "@chakra-ui/react"

import InsideElement from "./components/InsideElement"
import { CommonInputProps } from "./types/types"

/**
 *
 * @param {string} type - 필수;
 * @param {object} register - 필수; Input 필드를 관리함; 다양한 validation 처리 가능
 * @param {boolean} required - true(default) | false
 * @param {string} placeholder - 플레이스홀더
 * @param {string} variant - Input 스타일; outline(default)
 * @param {string} width - Input 너비; 20rem(default)
 * @param {string} size - Input 크기; md(default)
 * @param {string} fontSize - 폰트 크기; 1rem(default)
 * @param {string} borderRadius - 0rem(default)
 * @param {string} stackStyle - Input Wrapper에 스타일 속성을 지정할 수 있음
 * @param {React.ReactNode} children - <CommonInput> {children} </CommonInput>으로 Input 우측 내부에 아이콘 등의 요소를 추가할 수 있음
 * @param {...object} rest - Input에 스타일 속성을 적용하는 등 커스터마이징 가능
 * @returns {React.Element}
 */

const CommonInput = ({
  type,
  register,
  required = true,
  placeholder,
  variant = "outline",
  width = "20rem",
  size = "md",
  fontSize = "1rem",
  borderRadius = "0rem",
  stackStyle,
  children,
  ...rest
}: CommonInputProps) => {
  return (
    <Stack style={stackStyle}>
      <InputGroup width={width}>
        <Input
          type={type}
          {...register}
          required={required}
          placeholder={placeholder}
          variant={variant}
          width={width}
          size={size}
          fontSize={fontSize}
          borderRadius={borderRadius}
          _focus={{ boxShadow: "none" }}
          {...rest}></Input>
        <InsideElement>{children}</InsideElement>
      </InputGroup>
    </Stack>
  )
}

export default CommonInput
