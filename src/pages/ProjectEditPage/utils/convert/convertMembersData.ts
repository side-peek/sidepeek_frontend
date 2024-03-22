import { ProcessedMember } from "@utils/process/processMembers"

export const convertMembersData = (members: ProcessedMember[]) =>
  members
    .map(({ role, members }) => {
      return members?.map(({ id, nickname }) => {
        return {
          id,
          nickname,
          role,
        }
      })
    })
    ?.flat()
