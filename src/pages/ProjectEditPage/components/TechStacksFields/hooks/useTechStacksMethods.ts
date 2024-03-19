import { useFieldArray } from "react-hook-form"

import { Skill } from "api-models"

import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"
import { ProjectFormValues } from "@pages/ProjectEditPage/types/ProjectFormValues"

export const useTechStacksMethods = () => {
  const { control, setValue, getValues, watch, register } =
    useProjectFormContext()

  const { append, fields, remove } = useFieldArray<ProjectFormValues>({
    control,
    name: "techStacks",
  })

  const appendNewFields = () => {
    append({ category: "", data: [] })
  }

  const setCategory = (index: number, value: string) => {
    setValue(`techStacks.${index}.category`, value)
  }

  const appendStack = (index: number, element: Skill) => {
    const stacks = getValues(`techStacks.${index}.data`)
    setValue(`techStacks.${index}.data`, [...stacks, element])
  }

  const removeStack = (index: number, element: Skill) => {
    const stacks = getValues(`techStacks.${index}.data`)
    const filtered = stacks.filter((stack) => stack.id !== element.id)
    setValue(`techStacks.${index}.data`, [...filtered])
  }

  const removeField = (idx: number) => remove(idx)

  const selectedStacks = (index: number) => watch(`techStacks.${index}.data`)

  return {
    fields,
    watch,
    control,
    setCategory,
    appendNewFields,
    appendStack,
    removeStack,
    selectedStacks,
    removeField,
    register,
  }
}
