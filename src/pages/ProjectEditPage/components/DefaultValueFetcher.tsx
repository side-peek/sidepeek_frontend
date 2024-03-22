import { useSearchParams } from "react-router-dom"

import { Spinner } from "@chakra-ui/react"

import { useGetProjectEdit } from "../hooks/useGetProject"
import ProjectFormProvider from "../stores/ProjectFormProvider"
import { ProjectFormValues } from "../types/ProjectFormValues"
import ProjectForm from "./ProjectForm"

const DefaultValueFetcher = () => {
  const [searchParams] = useSearchParams()
  const projectId = searchParams.get("projectId")

  const { data: projectDetailInfo, isLoading } = useGetProjectEdit(
    Number(projectId),
  )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <ProjectFormProvider
      defaultValues={projectDetailInfo as unknown as ProjectFormValues}
      projectId={Number(projectId)}>
      <ProjectForm />
    </ProjectFormProvider>
  )
}

export default DefaultValueFetcher
