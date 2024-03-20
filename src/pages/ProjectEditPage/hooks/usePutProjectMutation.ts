import { putProjectPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { putProject } from "@apis/project/putProject"

export const usePutProjectMutation = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      body,
    }: {
      projectId: number
      body: putProjectPayload
    }) => putProject(projectId, body),
  })
}
