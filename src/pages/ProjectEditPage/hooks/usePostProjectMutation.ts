import { Project, postProjectPayload } from "api-models"
import { AxiosError } from "axios"

import { MutateOptions, useMutation } from "@tanstack/react-query"

import { postProject } from "@apis/project/postProject"

export const usePostProjectMutation = ({
  ...options
}: Omit<
  MutateOptions<
    Project,
    AxiosError<{ status: string; code: string; message: string }>,
    postProjectPayload
  >,
  "mutationFn"
>) => {
  return useMutation({
    mutationFn: (data: postProjectPayload) => postProject(data),
    ...options,
  })
}
