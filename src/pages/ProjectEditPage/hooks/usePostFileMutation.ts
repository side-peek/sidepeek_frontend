import { postProjectFiles } from "@api/projectFile/postProjectFiles"
import { postProjectFilesResponseType } from "api-models"
import { AxiosError } from "axios"

import { UseMutationOptions, useMutation } from "@tanstack/react-query"

import { PostFormDataType } from "../types/PostFormDataType"
import { TypedFormData } from "../types/TypedFormDataValue"

export const usePostFileMutation = ({
  ...options
}: UseMutationOptions<
  postProjectFilesResponseType,
  AxiosError,
  PostFormDataType
>) => {
  return useMutation({
    mutationKey: ["file"],
    mutationFn: (file: TypedFormData<{ file: File }>) => postProjectFiles(file),
    ...options,
  })
}
