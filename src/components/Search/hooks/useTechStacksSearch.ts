import { useLayoutEffect, useState } from "react"

import { Skill } from "api-models"

import { useGetTechStacksQuery } from "./queries/useGetTechStacksQuery"

export const useTechStacks = (value: string, showAll: boolean) => {
  const [techStacks, setTechStacks] = useState<Skill[]>([])
  const { data } = useGetTechStacksQuery(value, showAll)

  const filteredStacks = (data: Skill) => {
    setTechStacks((prev) => prev.filter((skill) => skill.id !== data.id))
  }

  useLayoutEffect(() => {
    if (!data) {
      return
    }
    setTechStacks(data)
  }, [data])

  return [techStacks, filteredStacks] as const
}
