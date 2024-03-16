import { cloneElement, isValidElement } from "react"
import { useFormContext } from "react-hook-form"

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
  Spacer,
} from "@chakra-ui/react"
import { isFunction } from "lodash"

import { InputControllerProps } from "./types/InputControllerProps"

const InputController = ({
  children,
  fieldName,
  label,
  registerOptions,
}: InputControllerProps) => {
  const {
    register,
    getFieldState,
    formState: { errors },
  } = useFormContext()

  const renderPorps = {
    height: "5rem",
    fontSize: "2rem",
    ...register(fieldName, registerOptions),
  } as InputProps

  return (
    <FormControl isInvalid={getFieldState(fieldName).invalid}>
      <Flex alignItems="center">
        <FormLabel display="inline-block">{label}</FormLabel>
        <Spacer />
        <FormErrorMessage>
          {errors[fieldName]?.message as string}
        </FormErrorMessage>
      </Flex>
      {isValidElement(children)
        ? cloneElement(children, renderPorps)
        : isFunction(children)
          ? children(renderPorps)
          : null}
    </FormControl>
  )
}

export default InputController
