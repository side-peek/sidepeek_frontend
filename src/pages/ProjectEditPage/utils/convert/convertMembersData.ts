import { UserSummary } from "api-models"

export const convertMembersData = (
  members: { role: string; userSummary: UserSummary[] }[],
) =>
  members
    .map(({ role, userSummary }) => {
      return userSummary?.map(({ id, nickname }) => {
        return {
          id,
          nickname,
          role,
        }
      })
    })
    ?.flat()
