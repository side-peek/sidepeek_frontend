import { RefObject, useEffect } from "react"

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void,
) => {
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
}
