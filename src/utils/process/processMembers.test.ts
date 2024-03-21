import { expect, test } from "vitest"

import { processMembers } from "./processMembers"

test("서버에서 내려온 members 배열을 사용하기 편하게 {role,members}로 묶어서 가공한다", () => {
  const members_provided_by_server = [
    {
      id: 1,
      role: "백엔드",
      userSummary: {
        id: 1,
        isSocialLogin: false,
        nickname: "의진",
        profileImageUrl: "https://user-images.githubusercontent.com/uijin.png",
      },
    },
    {
      id: 3,
      role: "프론트",
      userSummary: {
        id: 5,
        isSocialLogin: true,
        nickname: "종혁",
        profileImageUrl: "https://user-images.githubusercontent.com/uijin.png",
      },
    },
    {
      id: 3,
      role: "프론트",
      userSummary: {
        id: 7,
        isSocialLogin: false,
        nickname: "승민",
        profileImageUrl: "https://user-images.githubusercontent.com/uijin.png",
      },
    },
  ]

  const processedMembers = processMembers(members_provided_by_server)

  expect(processedMembers).toEqual([
    {
      role: "백엔드",
      members: [
        {
          id: 1,
          isSocialLogin: false,
          nickname: "의진",
          profileImageUrl:
            "https://user-images.githubusercontent.com/uijin.png",
        },
      ],
    },
    {
      role: "프론트",
      members: [
        {
          id: 5,
          isSocialLogin: true,
          nickname: "종혁",
          profileImageUrl:
            "https://user-images.githubusercontent.com/uijin.png",
        },
        {
          id: 7,
          isSocialLogin: false,
          nickname: "승민",
          profileImageUrl:
            "https://user-images.githubusercontent.com/uijin.png",
        },
      ],
    },
  ])
})
