import { postProjectFilesResponseType } from "api-models"
import { AxiosError } from "axios"

import { UseMutationOptions, useMutation } from "@tanstack/react-query"

import { postFile } from "@apis/file/postFile"

export const usePostFileMutation = ({
  ...options
}: UseMutationOptions<postProjectFilesResponseType, AxiosError, File>) => {
  return useMutation({
    mutationKey: ["file"],
    mutationFn: (file: File) => postFile(file),
    ...options,
  })
}
