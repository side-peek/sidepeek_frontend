import { useFieldArray } from "react-hook-form"

import { Skill } from "api-models"

import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"
import { ProjectFormValues } from "@pages/ProjectEditPage/types/ProjectFormValues"

export const useTechStacksMethods = () => {
  const {
    control,
    setValue,
    getValues,
    watch,
    register,
    formState: { errors },
    trigger,
  } = useProjectFormContext()

  const { append, fields } = useFieldArray<ProjectFormValues>({
    control,
    name: "techStacks",
    rules: {
      required: "하나 이상은 필수입니다",
    },
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

  const removeField = (index: number) => {
    const copy = [...watch("techStacks")]
    copy.splice(index, 1)
    setValue("techStacks", copy)
  }

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
    errors,
    trigger,
  }
}
