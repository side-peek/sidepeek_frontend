import { Input, InputGroup } from "@chakra-ui/react"

import InsideElement from "./components/InsideElement"
import { CommonInputProps } from "./types/types"

/**
 * @param {string} inputWidth - Input 너비; 20rem(default)
 * @param {object} register - 필수; Input 필드를 관리함; 다양한 validation 처리 가능
 * @param {string} type - text(default)
 * @param {boolean} required - true(default) | false
 * @param {string} placeholder - 플레이스홀더
 * @param {string} variant - Input 스타일; outline(default)
 * @param {string} size - Input 크기; md(default)
 * @param {string} fontSize - 폰트 크기; 1rem(default)
 * @param {string} borderRadius - 0rem(default)
 * @param {React.ReactNode} children - <CommonInput> {children} </CommonInput>으로 Input 우측 내부에 아이콘 등의 요소를 추가할 수 있음
 * @param {...object} props - Input에 스타일 속성을 적용하는 등 커스터마이징 가능
 * @returns {React.Element}
 */

const CommonInput = ({
  inputWidth = "20rem",
  register,
  children,
  ...props
}: CommonInputProps) => {
  return (
    <InputGroup width={inputWidth}>
      <Input
        {...register}
        type="text"
        required={true}
        placeholder="입력해주세요"
        variant="outline"
        size="md"
        fontSize="1rem"
        borderRadius="0rem"
        _focus={{ boxShadow: "none" }}
        {...props}
      />
      <InsideElement>{children}</InsideElement>
    </InputGroup>
  )
}

export default CommonInput
