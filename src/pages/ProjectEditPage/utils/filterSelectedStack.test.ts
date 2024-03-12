import { expect, test } from "vitest"

import { filterSelectedStack } from "./filterSelectedStack"

test("서버에서 내려온 기술스택 데이터 중 이미 선택된 기술스택을 제외한다", () => {
  const original = [
    {
      id: 1,
      name: "react",
      iconImageUrl: "https://www.iconimageurl.com",
    },
    {
      id: 2,
      name: "spring",
      iconImageUrl: "https://www.iconimageurl.com",
    },
    {
      id: 4,
      name: "spring boot",
      iconImageUrl: "https://www.iconimageurl.com",
    },
  ]
  const selected = [
    {
      id: 4,
      name: "spring boot",
      iconImageUrl: "https://www.iconimageurl.com",
    },
  ]
  expect(filterSelectedStack(original, selected)).toEqual([
    {
      id: 1,
      name: "react",
      iconImageUrl: "https://www.iconimageurl.com",
    },
    {
      id: 2,
      name: "spring",
      iconImageUrl: "https://www.iconimageurl.com",
    },
  ])
})
