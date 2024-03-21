import { UserSummary } from "api-models"
import { create } from "zustand"

import { ProcessedMember } from "@utils/process/processMembers"

interface MemberStore {
  fields: ProcessedMember[]
  appendField: () => void
  appendMember: (data: UserSummary, fieldIdx: number) => void
  deleteField: (fieldIdx: number) => void
  deleteMember: (data: UserSummary, fieldIdx: number) => void
  changeRole: (value: string, fieldIdx: number) => void
}

export const useMemberStore = create<MemberStore>((set) => ({
  fields: [{ role: "", members: [] }],
  appendField: () =>
    set((state) => ({
      fields: [...state.fields, { role: "", members: [] }],
    })),
  appendMember: (data: UserSummary, fieldIdx: number) =>
    set((state) => ({
      fields: state.fields?.map((field, idx) =>
        idx === fieldIdx
          ? { ...field, members: [...field.members, data] }
          : field,
      ),
    })),
  deleteField: (fieldIdx: number) => {
    set(({ fields }) => ({
      fields: fields.filter((_, idx) => fieldIdx !== idx),
    }))
  },
  deleteMember: (data: UserSummary, fieldIdx: number) => {
    set((state) => ({
      fields: state.fields?.map((field, idx) =>
        fieldIdx === idx
          ? {
              ...field,
              members: field.members.filter((member) => member.id !== data.id),
            }
          : field,
      ),
    }))
  },
  changeRole: (value: string, fieldIdx: number) => {
    set((state) => ({
      fields: state.fields?.map((field, idx) =>
        idx === fieldIdx ? { ...field, role: value } : field,
      ),
    }))
  },
}))
