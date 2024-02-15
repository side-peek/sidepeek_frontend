import { PropsWithChildren } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

import { InputProps } from "@chakra-ui/react"

export interface CommonInputProps extends PropsWithChildren, InputProps {
  register: UseFormRegisterReturn
  inputWidth?: string
}
