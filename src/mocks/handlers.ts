import { rest } from "msw"

export const handlers = [
  rest.get("/api/v1/skills", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        skills: [
          {
            id: 2,
            name: "spring",
            iconImageUrl: "https://www.iconimageurl.com",
          },
          {
            id: 3,
            name: "swift",
            iconImageUrl: "https://www.iconimageurl.com",
          },
        ],
      }),
    )
  }),
]
