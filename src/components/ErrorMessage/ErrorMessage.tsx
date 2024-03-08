import React, { cloneElement, isValidElement } from "react"
import { FieldErrors, get, useFormContext } from "react-hook-form"

import { ErrorMessageProps } from "./types/ErrorMessageProps"

const ErrorMessage = <
  TFieldErrors extends FieldErrors,
  TAs extends
    | undefined
    | React.ReactElement
    | keyof JSX.IntrinsicElements = undefined,
>({
  as,
  errors,
  name,
  message,
  render,
  ...rest
}: ErrorMessageProps<TFieldErrors, TAs>) => {
  const methods = useFormContext()
  const error = get(errors || methods.formState.errors, name)

  if (!error) {
    return null
  }

  const { message: messageFromRegister } = error
  const props = Object.assign({}, rest, {
    children: messageFromRegister || message,
  })

  return isValidElement(as)
    ? cloneElement(as, props)
    : render &&
        (render({
          message: messageFromRegister || message,
        }) as React.ReactElement)
}

export { ErrorMessage }
