import React, { cloneElement, isValidElement } from "react"
import { FieldErrors, get, useFormContext } from "react-hook-form"

import { ErrorMessageProps } from "./types/ErrorMessageProps"

/**
 * @errors {FieldErrors} useForm or useFormState에서 리턴된 errors 객체
 * @name {string} register의 name에 해당하는 문자열
 * @render {({message}) => JSX.Element} register의 message로 설정해놓은 값을 props로 가진 새로운 엘리먼트 리턴
 */
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

  const { message: messageFromRegister, types } = error
  const props = Object.assign({}, rest, {
    children: messageFromRegister || message,
  })

  return isValidElement(as)
    ? cloneElement(as, props)
    : render &&
        (render({
          message: messageFromRegister || message,
          messages: types,
        }) as React.ReactElement)
}

export { ErrorMessage }
