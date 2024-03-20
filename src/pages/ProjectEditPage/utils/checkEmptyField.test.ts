import { expect, test } from "vitest"

import { checkEmptyField } from "./checkEmptyField"

test("필드 값 중 빈 배열이 있을 경우 false를 리턴한다", () => {
  const fields: { category: string; data: string[] }[] = [
    { category: "백엔드", data: ["a", "b", "c"] },
    { category: "", data: ["c", "a", "b"] },
    { category: "              ", data: [] },
  ]
  expect(checkEmptyField(fields)).toBe(true)
})
