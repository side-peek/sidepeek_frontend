import { useForm } from "react-hook-form"

import { ProjectFormDefaultValues } from "../constants/defaultValues"
import { ProjectFormValues } from "../types/ProjectFormValues"

export const useProjectForm = () => {
  return useForm<ProjectFormValues>({
    defaultValues: ProjectFormDefaultValues,
  })
}
