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
    append({ category: "", stacks: [] })
  }

  const setCategory = (index: number, value: string) => {
    setValue(`techStacks.${index}.category`, value)
  }

  const appendStack = (index: number, element: Skill) => {
    const stacks = getValues(`techStacks.${index}.stacks`)
    setValue(`techStacks.${index}.stacks`, [...stacks, element])
  }

  const removeStack = (index: number, element: Skill) => {
    const stacks = getValues(`techStacks.${index}.stacks`)
    const filtered = stacks.filter((stack) => stack.id !== element.id)
    setValue(`techStacks.${index}.stacks`, [...filtered])
  }

  const selectedStacks = (index: number) => watch(`techStacks.${index}.stacks`)

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
