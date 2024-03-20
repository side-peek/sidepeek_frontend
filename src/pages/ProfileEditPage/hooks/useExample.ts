import { useFieldArray, useForm } from "react-hook-form"

import { Skill } from "api-models"

import { ProjectFormValues } from "@pages/ProjectEditPage/types/ProjectFormValues"

export const useExample = () => {
  const { control, setValue, getValues, watch } =
    useForm<Pick<ProjectFormValues, "techStacks">>()

  const { append, fields } = useFieldArray<
    Pick<ProjectFormValues, "techStacks">
  >({
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
  }
}
