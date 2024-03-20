import { PropsWithChildren } from "react"
import { FormProvider } from "react-hook-form"

import { Button } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { usePostProjectMutation } from "../hooks/usePostProjectMutation"
import { useProjectForm } from "../hooks/useProjectForm"
import { ProjectFormValues } from "../types/ProjectFormValues"

const ProjectFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useProjectForm()
  const { mutate } = usePostProjectMutation()
  const userInfo = useUserInfoData()
  const handleSubmitEvent = (data: ProjectFormValues) => {
    const convertedMembers = data.members
      .map(({ category, data }) => {
        return data.map(({ id, nickname }) => {
          if (!data.length) {
            methods.setError("members", { message: " 하나 이상 넣으세요" })
          }
          return {
            id,
            nickname,
            role: category,
          }
        })
      })
      .flat()

    const convertedTechStacks = data.techStacks
      .map(({ category, data }) => {
        return data.map(({ id }) => ({ skillId: id, category }))
      })
      .flat()

    mutate({
      ...data,
      members: convertedMembers,
      techStacks: convertedTechStacks,
      ownerId: userInfo?.id as number,
    })
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
