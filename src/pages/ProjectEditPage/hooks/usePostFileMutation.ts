import { postProjectFiles } from "@api/projectFile/postProjectFiles"
import { postProjectFilesResponseType } from "api-models"
import { AxiosError } from "axios"

import { UseMutationOptions, useMutation } from "@tanstack/react-query"

export const usePostFileMutation = ({
  ...options
}: UseMutationOptions<postProjectFilesResponseType, AxiosError, FormData>) => {
  return useMutation({
    mutationKey: ["file"],
    mutationFn: (file: FormData) => postProjectFiles(file),
    ...options,
  })
}
