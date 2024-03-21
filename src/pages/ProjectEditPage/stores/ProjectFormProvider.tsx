import { ReactNode } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Button, Center, useToast } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

import { useQueryClient } from "@tanstack/react-query"

import { useTechStackStore } from "@stores/useTechStackStore"

import { QUERYKEY } from "@constants/queryKey"

import { useMemberStore } from "../components/MemberFields/stores/useMemberStore"
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
  const toast = useToast()
  const queryClient = useQueryClient()
  const methods = useForm<ProjectFormValues>({
    defaultValues: defaultValues || ProjectFormDefaultValues,
  })
  const navigate = useNavigate()

  const { mutate: postProject } = usePostProjectMutation({
    onError: (error) => {
      toast({
        status: "error",
        title: error.response && error.response?.data.message,
      })
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERYKEY.PROJECT_DETAIL],
      })
      navigate(`../project/${data.id}`)
    },
  })
  const { mutate: putProject } = usePutProjectMutation({
    onError: (error) =>
      toast({
        status: "error",
        title: error.response && error.response?.data.message,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERYKEY.PROJECT_DETAIL],
      })
      navigate(`../project/${data.id}`)
    },
  })

  const handleSubmitEvent = (data: ProjectFormValues) => {
    const convertedMembers = useMemberStore
      .getState()
      .fields.map(({ role, members }) => {
        return members?.map(({ id, nickname }) => {
          return {
            id,
            nickname,
            role,
          }
        })
      })
      ?.flat()

    const convertedTechStacks = useTechStackStore
      .getState()
      .fields.map(({ category, data }) => {
        return data?.map(({ id }) => ({ skillId: id, category }))
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
          startDate: convertedDate(data.startDate),
          endDate: convertedDate(data.endDate),
        },
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => handleSubmitEvent(data))}>
        {children}
        <Center>
          <Button
            width="100%"
            variant="solid"
            padding="2rem"
            marginTop="1rem"
            type="submit"
            disabled={
              methods.formState.isSubmitting || methods.formState.isValidating
            }>
            제출하기
          </Button>
        </Center>
      </form>
    </FormProvider>
  )
}

export default ProjectFormProvider
