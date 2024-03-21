import { ReactNode } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { ProjectFormDefaultValues } from "../constants/defaultValues"
import { usePostProjectMutation } from "../hooks/usePostProjectMutation"
import { usePutProjectMutation } from "../hooks/usePutProjectMutation"
import { ProjectFormValues } from "../types/ProjectFormValues"

interface ProjectFormProviderProps {
  children: ReactNode
  defaultValues?: ProjectFormValues
  projectId?: number
}

const ProjectFormProvider = ({
  children,
  defaultValues,
  projectId,
}: ProjectFormProviderProps) => {
  const userInfo = useUserInfoData()

  const methods = useForm<ProjectFormValues>({
    defaultValues: defaultValues || ProjectFormDefaultValues,
  })

  const { mutate: postProject } = usePostProjectMutation()
  const { mutate: putProject } = usePutProjectMutation()

  const handleSubmitEvent = (data: ProjectFormValues) => {
    const convertedMembers = data.members
      .map(({ category, data }) => {
        return data.map(({ id, nickname }) => {
          return {
            id,
            nickname,
            role: category,
          }
        })
      })
      ?.flat()

    const convertedTechStacks = data.techStacks
      .map(({ category, data }) => {
        return data.map(({ id }) => ({ skillId: id, category }))
      })
      ?.flat()

    const convertedDate = (date: string) => {
      const idx = date.lastIndexOf("-")
      return date.slice(0, idx)
    }

    if (!projectId) {
      postProject({
        ...data,
        members: convertedMembers,
        techStacks: convertedTechStacks,
        ownerId: userInfo?.id as number,
        startDate: convertedDate(data.startDate),
        endDate: convertedDate(data.endDate),
      })
    } else {
      putProject({
        projectId,
        body: {
          ...data,
          members: convertedMembers,
          techStacks: convertedTechStacks,
        },
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => handleSubmitEvent(data))}>
        {children}
        <Button />
      </form>
    </FormProvider>
  )
}

export default ProjectFormProvider
