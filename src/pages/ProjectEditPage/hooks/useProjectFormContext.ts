import { useFormContext } from "react-hook-form"

import { ProjectFormValues } from "../types/ProjectFormValues"

export const useProjectFormContext = () => {
  return useFormContext<ProjectFormValues>()
}
