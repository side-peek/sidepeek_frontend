import { postProjectPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { postProject } from "@apis/project/postProject"

export const usePostProjectMutation = () => {
  return useMutation({
    mutationFn: (data: postProjectPayload) => postProject(data),
  })
}
