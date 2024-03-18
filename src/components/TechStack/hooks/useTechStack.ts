import { ChangeEventHandler, useState } from "react"

import { Skill } from "api-models"

type FieldElement<T> = {
  id?: string | number
  category: string
  data: T[]
}

export interface FieldProps<T> {
  fieldValue?: FieldElement<T>[]
  defaultValue?: FieldElement<T>[]
  onAppendField?: () => void
  onAppendStack?: (data: T, idx: number) => void
  onDeleteField?: (number: number) => void
  onDeleteStack?: (data: T, idx: number) => void
  onChangeCategory: (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => void
  render: ({
    value,
    onChange,
  }: {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
  }) => JSX.Element
}

export const useTechStack = (defaultValue: FieldElement<Skill>[]) => {
  const [fieldValue, setFieldValue] = useState<FieldElement<Skill>[]>(
    defaultValue || [],
  )

  const onAppendField = () => {
    setFieldValue((prev) => {
      if (!prev) {
        return [{ category: "", data: [] }]
      }
      return [...prev, { category: "", data: [] }]
    })
  }

  const onAppendStack = (data: Skill, idx: number) => {
    setFieldValue((prev) =>
      prev?.map((item, index) =>
        index === idx ? { ...item, data: [...item.data, data] } : item,
      ),
    )
  }

  const onDeleteField = (number: number) => {
    setFieldValue((prev) => prev?.filter((_, idx) => idx !== number))
  }

  const onDeleteStack = (data: Skill, idx: number) => {
    setFieldValue((prev) =>
      prev?.map((item, index) =>
        index === idx
          ? { ...item, data: item.data.filter((skill) => skill.id !== data.id) }
          : item,
      ),
    )
  }

  const onChangeCategory = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    setFieldValue((prev) =>
      prev.map((el, number) =>
        number === idx ? { ...el, category: e.target.value } : el,
      ),
    )
  }

  return {
    fieldValue,
    onAppendField,
    onAppendStack,
    onDeleteField,
    onDeleteStack,
    setFieldValue,
    onChangeCategory,
  }
}
