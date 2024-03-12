import { postEmailLoginResponseType } from "api-models"
import { rest } from "msw"

import { ENDPOINTS } from "@constants/endPoints"

export const postEmailLogin = rest.post(
  ENDPOINTS.EMAIL_LOGIN,
  (_, res, ctx) => {
    const response: postEmailLoginResponseType = {
      accessToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzaXhnYWV6emFuZyIsImlhdCI6MTcxMDI0MTgzNCwiZXhwIjoxNzEwMjQ1NDM0LCJ1c2VyX2lkIjo2fQ.2_QWBUJIGGVcqLRq2gHhjwPONc0KmhAzDc3TiOefptd_SWNy-FbDNqbPAB4JTmyIuR1AVr_wipT0w0FCQZ_Q-w",
      refreshToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzaXhnYWV6emFuZyIsImlhdCI6MTcxMDI0MTgzNCwiZXhwIjoxNzEwODQ2NjM0LCJ1c2VyX2lkIjo2fQ.p6O0ZMKJ-18CoXXvpcjF0N9nuMjWD0zMBwL6AzcCYVix6KzlXsfiWGd1rve38DC4ZCSD9_gJNt-MOUP8behzYA",
      user: {
        id: 0,
        nickname: "admin",
        profileImageUrl: "https://picsum.photos/200/300",
      },
    }
    return res(ctx.status(200), ctx.json(response))
  },
)
