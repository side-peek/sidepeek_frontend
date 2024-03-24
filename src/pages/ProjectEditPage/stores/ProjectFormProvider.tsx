/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react"
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
import { convertDate } from "../utils/convert/convertDate"
import { convertMembersData } from "../utils/convert/convertMembersData"
import { convertTechStacksData } from "../utils/convert/convertTechStacksData"

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
        queryKey: [QUERYKEY.PROJECT_DETAIL, projectId],
      })
      navigate(`../project/${data.id}`)
    },
  })

  const handleSubmitEvent = (data: ProjectFormValues) => {
    const convertedData = {
      ...data,
      overviewImageUrl: data.overviewImageUrl.filter((url) => url),
      techStacks: convertTechStacksData(useTechStackStore.getState().fields),
      members: convertMembersData(useMemberStore.getState().fields),
      startDate: convertDate(data.startDate),
      endDate: convertDate(data.endDate),
    }

    if (!projectId) {
      postProject({
        ...convertedData,
        ownerId: userInfo?.id as number,
        overviewImageUrl: data.overviewImageUrl.filter((url) => url),
      })
    } else {
      putProject({
        projectId,
        body: {
          ...convertedData,
          overviewImageUrl: data.overviewImageUrl.filter((url) => url),
        },
      })
    }
  }

  useEffect(() => {
    useMemberStore.setState(() => ({ fields: defaultValues?.members || [] }))
    useTechStackStore.setState(() => ({
      fields: defaultValues?.techStacks || [],
    }))
  }, [])

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
