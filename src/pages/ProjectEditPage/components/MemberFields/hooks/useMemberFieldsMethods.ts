import { useFieldArray, useFormContext } from "react-hook-form"

type RequestedMemberType = {
  id: number | null
  nickname: string
  profileImageUrl: string | null
}

type MemberFieldValues = {
  members: {
    category: string
    members: RequestedMemberType[]
  }[]
}

export const useMemberFieldsMethods = () => {
  const { control, getValues, setValue, watch, register } =
    useFormContext<MemberFieldValues>()

  const { fields, append, remove } = useFieldArray({
    name: "members",
    control,
  })

  const appendNewFields = () => {
    append({ category: "", members: [] })
  }

  const deleteFields = (idx: number) => {
    remove(idx)
  }

  const setCategory = (value: string, idx: number) => {
    setValue(`members.${idx}.category`, value)
  }

  const appendMembers = (data: RequestedMemberType, idx: number) => {
    const members = [...getValues(`members.${idx}.members`), data]
    setValue(`members.${idx}.members`, members)
  }

  const removeMembers = (data: RequestedMemberType, idx: number) => {
    const members = [...getValues(`members.${idx}.members`)]
    setValue(
      `members.${idx}.members`,
      members.filter((member) => member.id !== data.id),
    )
  }

  const getSelectedMembers = (idx: number) => watch(`members.${idx}.members`)

  return {
    fields,
    register,
    appendNewFields,
    deleteFields,
    setCategory,
    appendMembers,
    removeMembers,
    getSelectedMembers,
  }
}
