import { CSSProperties } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

export interface CommonInputProps {
  //   isInvalid?: boolean
  register?: UseFormRegisterReturn
  required: boolean
  placeholder?: string
  variant?: "outline" | "filled" | "flushed" | "unstyled"
  size?: "xs" | "sm" | "md" | "lg"
  width?: string
  stackStyle?: CSSProperties
  type: "text" | "email" | "password"
  borderRadius?: string
  [key: string]: unknown
}
