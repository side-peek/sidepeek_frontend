/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react"

export const useDebounce = <T extends any[]>(
  callback: (...params: T) => void,
  time: number,
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  return (...params: T) => {
    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      callback(...params)
      timer.current = null
    }, time)
  }
}
