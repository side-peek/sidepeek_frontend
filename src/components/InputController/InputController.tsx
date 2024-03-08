import { ReactNode } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Spacer,
} from "@chakra-ui/react"

interface InputControllerProps extends InputProps {
  children?: ReactNode
  label?: string
  registerOptions: UseFormRegisterReturn
  isInvalid?: boolean
  errorMessage?: string
}

const InputController = ({
  children,
  isInvalid,
  label,
  registerOptions,
  errorMessage,
  ...props
}: InputControllerProps) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Flex alignItems="center">
        <FormLabel display="inline-block">{label}</FormLabel>
        <Spacer />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </Flex>
      <Flex alignItems="center">
        <Input
          height="5rem"
          fontSize="2rem"
          {...registerOptions}
          {...props}
        />
        {children}
      </Flex>
    </FormControl>
  )
}

export default InputController
