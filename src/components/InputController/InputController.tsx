import { ReactNode } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Spacer,
} from "@chakra-ui/react"

import { FormKeys } from "./types/formKeys"

interface InputControllerProps extends InputProps {
  name: FormKeys
  children?: ReactNode
  label?: string
  registerOptions: RegisterOptions
}

const InputController = ({
  children,
  name,
  label,
  registerOptions,
  ...props
}: InputControllerProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <Flex alignItems="center">
        <FormLabel display="inline-block">{label}</FormLabel>
        <Spacer />
        <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
      </Flex>
      <Flex alignItems="center">
        <Input
          height="5rem"
          fontSize="2rem"
          {...register(name, registerOptions)}
          {...props}
        />
        {children}
      </Flex>
    </FormControl>
  )
}

export default InputController
