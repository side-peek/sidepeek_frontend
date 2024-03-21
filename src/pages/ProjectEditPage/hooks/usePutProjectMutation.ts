import { Project, putProjectPayload } from "api-models"
import { AxiosError } from "axios"

import { MutateOptions, useMutation } from "@tanstack/react-query"

import { putProject } from "@apis/project/putProject"

export const usePutProjectMutation = ({
  ...options
}: MutateOptions<
  Project,
  AxiosError<{ status: string; code: string; message: string }>,
  { projectId?: number; body: putProjectPayload }
>) => {
  return useMutation({
    mutationFn: ({
      projectId,
      body,
    }: {
      projectId: number
      body: putProjectPayload
    }) => putProject(projectId, body),
    ...options,
  })
}
