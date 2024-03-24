import { useFormContext } from "react-hook-form"

import { useDoubleCheckStore } from "@stores/useDoubleCheckStore"

import { duplicatedErrors } from "../constants/errorOptions"
import { DoubleCheckFiledNames } from "../types/doubleCheckFieldNames"
import { useDoubleCheckMutaion } from "./mutations/useDoubleCheckMutation"

export const useDoubleCheck = (fieldName: DoubleCheckFiledNames) => {
  const { trigger, getValues, setError } = useFormContext()
  const { setCheckedValue, reset: checkedValueReset } = useDoubleCheckStore(
    (state) => state,
  )

  const checkMutation = useDoubleCheckMutaion({
    setError: () => {
      checkedValueReset(fieldName)
      setError(fieldName, duplicatedErrors[fieldName])
    },
  })[fieldName]

  const handleDoubleCheck = async () => {
    const isValid = await trigger(fieldName)

    if (!isValid) {
      return
    }

    const value = getValues(fieldName)

    setCheckedValue(fieldName, value)
    checkMutation.mutate(value)
  }

  return {
    checkMutation,
    handleDoubleCheck,
  }
}
