import { useFormContext } from "react-hook-form"

import { useDoubleCheckStore } from "@stores/useDoubleCheckStore"

import { duplicatedErrors } from "../constants/errorOptions"
import { DoubleCheckFiledNames } from "../types/DoubleCheckFieldNames"
import { useDoubleCheckMutaion } from "./mutations/useDoubleCheckMutation"

export const useDoubleCheck = (fieldName: DoubleCheckFiledNames) => {
  const { trigger, getValues, getFieldState, setError, formState } =
    useFormContext()
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
    await trigger(fieldName)

    if (getFieldState(fieldName, formState).invalid) {
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
