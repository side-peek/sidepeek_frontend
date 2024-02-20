import { useEffect, useRef } from "react"

export const useOutsideClick = <T extends HTMLElement>(
  handler: (e: Event) => void,
) => {
  const ref = useRef<T>(null)
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current === e.target) {
        return
      }
      handler(e)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
  return ref
}
