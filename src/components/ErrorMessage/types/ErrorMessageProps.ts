/* eslint-disable @typescript-eslint/ban-types */
import React from "react"
import {
  FieldErrors,
  FieldName,
  Message,
  MultipleFieldErrors,
} from "react-hook-form"

type Assign<T extends object, U extends object> = T & Omit<U, keyof T>

export type FieldValuesFromFieldErrors<TFieldErrors> =
  TFieldErrors extends FieldErrors<infer TFieldValues> ? TFieldValues : never

type AsProps<TAs> = TAs extends undefined
  ? {}
  : TAs extends React.ReactElement
    ? Record<string, string>
    : TAs extends React.ComponentType<infer P>
      ? Omit<P, "children">
      : TAs extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[TAs]
        : never

export type ErrorMessageProps<
  TFieldErrors extends FieldErrors,
  TAs extends undefined | React.ReactElement | keyof JSX.IntrinsicElements,
> = Assign<
  {
    as?: TAs
    errors: TFieldErrors
    name: FieldName<FieldValuesFromFieldErrors<TFieldErrors>>
    message?: Message
    render?: (data: {
      message: Message
      messages?: MultipleFieldErrors
    }) => React.ReactNode
  },
  AsProps<TAs>
>
