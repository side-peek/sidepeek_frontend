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

  const { fields, append } = useFieldArray({
    name: "members",
    control,
  })

  const appendNewFields = () => {
    append({ category: "", data: [] })
  }

  const deleteFields = (idx: number) => {
    const copy = [...watch("members")]
    copy.splice(idx, 1)
    setValue("members", [...copy.filter((v) => v)])
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
