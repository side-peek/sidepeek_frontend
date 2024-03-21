import { describe, expect, test } from "vitest"

import { processTechStacks } from "@utils/processTechStacks"

const techStacks_provided_by_server = [
  {
    id: 1,
    category: "프론트엔드",
    skill: {
      id: 1,
      name: "React",
      iconImageUrl: "https://sidepeek.image/icon1.jpg",
    },
  },
  {
    id: 1,
    category: "프론트엔드",
    skill: {
      id: 5,
      name: "Typescript",
      iconImageUrl: "https://sidepeek.image/icon1.jpg",
    },
  },
  {
    id: 5,
    category: "백엔드",
    skill: {
      id: 18,
      name: "Redis",
      iconImageUrl: "https://sidepeek.image/icon1.jpg",
    },
  },
]

describe("서버에서 내려오는 기술스택 데이터를 사용하기 편하게 가공한다", () => {
  test("일반적으로 요청이 온 경우", () => {
    expect(processTechStacks(techStacks_provided_by_server)).toEqual([
      {
        category: "프론트엔드",
        data: [
          {
            id: 1,
            name: "React",
            iconImageUrl: "https://sidepeek.image/icon1.jpg",
          },
          {
            id: 5,
            name: "Typescript",
            iconImageUrl: "https://sidepeek.image/icon1.jpg",
          },
        ],
      },
      {
        category: "백엔드",
        data: [
          {
            id: 18,
            name: "Redis",
            iconImageUrl: "https://sidepeek.image/icon1.jpg",
          },
        ],
      },
    ])
  })
  test("빈 배열이 올 경우", () => {
    expect(processTechStacks([]).length).toBe(0)
  })
})
