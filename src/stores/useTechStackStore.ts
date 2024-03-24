import { Skill } from "api-models"
import { create } from "zustand"

interface TechStackStore {
  fields: { category: string; skill: Skill[] }[]
  appendField: () => void
  appendStack: (data: Skill, fieldIdx: number) => void
  deleteField: (fieldIdx: number) => void
  deleteStack: (data: Skill, fieldIdx: number) => void
  changeCategory: (value: string, fieldIdx: number) => void
}

export const useTechStackStore = create<TechStackStore>((set) => ({
  fields: [{ category: "", skill: [] }],
  appendField: () =>
    set((state) => ({
      fields: [...state.fields, { category: "", skill: [] }],
    })),
  appendStack: (data: Skill, fieldIdx: number) =>
    set((state) => ({
      fields: state.fields?.map((techStack, idx) =>
        idx === fieldIdx
          ? { ...techStack, skill: [...techStack.skill, data] }
          : techStack,
      ),
    })),
  deleteField: (fieldIdx: number) => {
    set(({ fields }) => ({
      fields: fields.filter((_, idx) => fieldIdx !== idx),
    }))
  },
  deleteStack: (data: Skill, fieldIdx: number) => {
    set((state) => ({
      fields: state.fields?.map((techStack, idx) =>
        fieldIdx === idx
          ? {
              ...techStack,
              skill: techStack.skill.filter((el) => el.id !== data.id),
            }
          : techStack,
      ),
    }))
  },
  changeCategory: (value: string, fieldIdx: number) => {
    set((state) => ({
      fields: state.fields?.map((techStack, idx) =>
        idx === fieldIdx ? { ...techStack, category: value } : techStack,
      ),
    }))
  },
}))
