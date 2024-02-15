import { MouseEventHandler } from "react"

// Tag 컴포넌트의 색상을 결정하는 colorScheme 속성의 값은 chakra에서 지정된 값만 적용 가능
// But 타입 지원 안해줘서 수기로 작성

type ColorScheme = "blackAlpha" | "gray" | "red" | "green" | "blue" | "pink"

export interface CustomTagProps {
  label: string
  variant?: "outline" | "solid"
  colorScheme?: ColorScheme
  onClickLabel?: MouseEventHandler
}
