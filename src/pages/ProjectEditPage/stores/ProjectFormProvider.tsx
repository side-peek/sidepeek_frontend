import { PropsWithChildren } from "react"
import { FormProvider } from "react-hook-form"

import { useUserInfoData } from "@services/caches/useUserInfoData"

import { usePostProjectMutation } from "../hooks/usePostProjectMutation"
import { useProjectForm } from "../hooks/useProjectForm"
import { ProjectFormValues } from "../types/ProjectFormValues"

const ProjectFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useProjectForm()
  const { mutate } = usePostProjectMutation()
  //TODO : 인증 관련 로직 수정 필요
  const userInfo = useUserInfoData()
  if (!userInfo) {
    throw new Error()
  }

  const handleSubmitEvent = (data: ProjectFormValues) => {
    const members = data.members
      .map(({ category, members }) => {
        return members.map(({ id, nickname }) => {
          if (!members.length) {
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
    const techStacks = data.techStacks
      .map(({ category, stacks }) => {
        return stacks.map(({ id }) => ({ skillId: id, category }))
      })
      .flat()
    mutate({ ...data, members, techStacks, ownerId: userInfo.id as number })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => handleSubmitEvent(data))}>
        {children}
      </form>
    </FormProvider>
  )
}

export default ProjectFormProvider
