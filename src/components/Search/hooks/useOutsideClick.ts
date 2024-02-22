import { useEffect, useRef } from "react"

export const useOutsideClick = <T extends HTMLElement>(
  handler: (e: MouseEvent) => void,
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || !(e.target instanceof HTMLElement)) {
        return
      }
      if (ref.current === e.target || ref.current.contains(e.target)) {
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
