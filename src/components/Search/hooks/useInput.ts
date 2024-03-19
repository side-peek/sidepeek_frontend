/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler, useState } from "react"

import { useDebounce } from "@hooks/useDebounce"

export const useInput = (initialValue = "", timer = 500) => {
  const [inputValue, setInputValue] = useState(initialValue)

  const onInput: ChangeEventHandler<HTMLInputElement> = useDebounce((e) => {
    const inputValue = e.target.value.trim()
    setInputValue(inputValue)
  }, timer)

  return [inputValue, onInput] as const
}
