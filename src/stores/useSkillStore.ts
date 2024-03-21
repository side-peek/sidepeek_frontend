import { Skill } from "api-models"
import { create } from "zustand"

//const initialSkill = localStorage.getItem("skill") as string[]

interface useSkillStoreType {
  skills: Skill[]
  appendSkill: (selectedSkill: Skill) => void
  removeSkill: (selectedSkill: Skill) => void
}

const useSkillStore = create<useSkillStoreType>((set) => ({
  skills: [],
  appendSkill: (selectedSkill) =>
    set((prev) => ({ skills: [...prev.skills, selectedSkill] })),
  removeSkill: (selectedSkill) =>
    set((prev) => ({
      skills: prev.skills.filter((el) => el.name !== selectedSkill.name),
    })),
}))

export default useSkillStore
