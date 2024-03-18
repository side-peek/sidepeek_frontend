import { rest } from "msw"
import { DUMMY_USERSUMMARY } from "src/pages/ProjectEditPage/mocks/mockData"

import { ENDPOINTS } from "@constants/endPoints"

export const projectEditHandler = [
  rest.post(ENDPOINTS.UPLOAD_PROJECT_FILES, (_, res, ctx) => {
    const random = Math.random() * 5000
    return random > 2500
      ? res(
          ctx.delay(random),
          ctx.status(200),
          ctx.json({
            fileUrl:
              "https://sidepeek.s3.ap-northeast-2.amazonaws.com/2024/03/05/20/17/00/1.jpg",
          }),
        )
      : res(
          ctx.delay(random),
          ctx.status(400),
          ctx.json({
            status: "BAD_REQUEST",
            code: 400,
            message: "유효하지 않은 요청입니다.",
          }),
        )
  }),
  rest.get("/api/v1/users/nickname", (req, res, ctx) => {
    req.url.searchParams.get("keyword")
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        ...DUMMY_USERSUMMARY,
      }),
    )
  }),
]
