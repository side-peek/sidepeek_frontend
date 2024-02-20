import { ChangeEventHandler, useCallback, useState } from "react"

export const useInput = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue)

  const onInput: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const inputValue = e.target.value.trim()
    setInputValue(inputValue)
  }, [])

  return { inputValue, onInput }
}
