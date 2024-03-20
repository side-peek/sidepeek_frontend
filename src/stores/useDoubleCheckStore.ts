import { create } from "zustand"

import { DoubleCheckFiledNames } from "@pages/SignUpPage/types/doubleCheckFieldNames"

interface State extends Record<DoubleCheckFiledNames, string> {}

interface UseDoubleCheckStore extends State {
  setCheckedValue: (fieldName: keyof State, value: string) => void
  reset: (fieldName: keyof State | undefined) => void
}

const initialValues = {
  email: "",
  nickname: "",
}

export const useDoubleCheckStore = create<UseDoubleCheckStore>((set) => ({
  ...initialValues,
  setCheckedValue: (fieldName, value) => set(() => ({ [fieldName]: value })),
  reset: (fieldName) =>
    fieldName
      ? set({ [fieldName]: initialValues[fieldName] })
      : set(initialValues),
}))
