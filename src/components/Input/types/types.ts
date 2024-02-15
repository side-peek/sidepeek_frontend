import { CSSProperties, ReactNode } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

export interface CommonInputProps {
  type: "text" | "email" | "password"
  register: UseFormRegisterReturn
  required?: boolean
  placeholder?: string
  variant?: "outline" | "filled" | "flushed" | "unstyled"
  width?: string
  size?: "xs" | "sm" | "md" | "lg"
  fontSize?: string
  borderRadius?: string
  stackStyle?: CSSProperties
  children?: ReactNode
  [key: string]: unknown
}
