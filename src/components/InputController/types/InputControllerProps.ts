import { ReactNode } from "react"
import { FieldValues, RegisterOptions } from "react-hook-form"

import { InputProps } from "@chakra-ui/input"

import { FieldNames } from "./FieldNames"

export interface InputControllerProps {
  fieldName: FieldNames
  children: ReactNode | ((renderProps: InputProps) => ReactNode)
  label?: string
  registerOptions: RegisterOptions<FieldValues>
}
