import { rest } from "msw"

import { DUMMY_PROJECTS, DUMMY_USER_INFO } from "./mockData"

export const userInfoHandlers = [
  rest.get("/api/v1/users/1", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY_USER_INFO))
  }),
]

export const projectsHandlers = [
  rest.get("/api/v1/projects", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY_PROJECTS))
  }),
]
