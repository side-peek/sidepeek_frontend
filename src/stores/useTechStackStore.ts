import { Skill } from "api-models"
import { create } from "zustand"

import { ProcessedTechStack } from "@utils/process/processTechStacks"

interface TechStackStore {
  fields: ProcessedTechStack[]
  appendField: () => void
  appendStack: (data: Skill, fieldIdx: number) => void
  deleteField: (fieldIdx: number) => void
  deleteStack: (data: Skill, fieldIdx: number) => void
  changeCategory: (value: string, fieldIdx: number) => void
}

export const useTechStackStore = create<TechStackStore>((set) => ({
  fields: [{ category: "", data: [] }],
  appendField: () =>
    set((state) => ({
      fields: [...state.fields, { category: "", data: [] }],
    })),
  appendStack: (data: Skill, fieldIdx: number) =>
    set((state) => ({
      fields: state.fields?.map((techStack, idx) =>
        idx === fieldIdx
          ? { ...techStack, data: [...techStack.data, data] }
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
              data: techStack.data.filter((skill) => skill.id !== data.id),
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
