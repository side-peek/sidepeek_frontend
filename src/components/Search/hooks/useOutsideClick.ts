import { useEffect, useRef, useState } from "react"

export const useOutsideClick = <T extends HTMLElement>(
  initialState = false,
) => {
  const [isFocused, setIsFocused] = useState(initialState)
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || !(e.target instanceof HTMLElement)) {
        return
      }
      if (ref.current === e.target || ref.current.contains(e.target)) {
        setIsFocused(true)
        return
      }
      setIsFocused(false)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref])
  return [ref, isFocused] as const
}
