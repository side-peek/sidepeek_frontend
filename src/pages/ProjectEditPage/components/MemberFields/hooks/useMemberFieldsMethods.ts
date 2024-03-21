import { useFieldArray } from "react-hook-form"

import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"
import { RequestedMemberType } from "@pages/ProjectEditPage/types/ProjectFormValues"

export const useMemberFieldsMethods = () => {
  const {
    control,
    setValue,
    watch,
    register,
    trigger,
    formState: { errors },
  } = useProjectFormContext()

  const { fields, append, remove } = useFieldArray({
    name: "members",
    control,
  })

  const appendNewFields = () => {
    append({ category: "", data: [] })
  }

  const deleteFields = (idx: number) => {
    remove(idx)
  }

  const setCategory = (value: string, idx: number) => {
    setValue(`members.${idx}.category`, value)
  }

  const appendMembers = (data: RequestedMemberType, idx: number) => {
    const members = [...watch(`members.${idx}.data`), data]
    setValue(`members.${idx}.data`, members)
  }

  const removeMembers = (data: RequestedMemberType, idx: number) => {
    const members = watch(`members.${idx}.data`)

    setValue(
      `members.${idx}.data`,
      members?.filter((member) => member.id !== data.id),
    )
  }

  return {
    fields,
    control,
    register,
    appendNewFields,
    deleteFields,
    setCategory,
    appendMembers,
    removeMembers,
    errors,
    trigger,
  }
}
