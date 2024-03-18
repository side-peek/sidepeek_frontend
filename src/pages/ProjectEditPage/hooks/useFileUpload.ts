import { useState } from "react"

import { PostFormDataType } from "../types/PostFormDataType"
import { getTypedFormData } from "../types/TypedFormDataValue"
import { usePostFileMutation } from "./usePostFileMutation"

export const useFileUpload = () => {
  const [files, setFiles] = useState<string[]>([])

  const { mutateAsync } = usePostFileMutation({})

  const onChangeFile = async (uploadFiles: File[]) => {
    const promises = Object.values(uploadFiles).map(async (file) => {
      const imageFormData: PostFormDataType = getTypedFormData<{
        file: File
      }>()
      imageFormData.append("file", file)

      return await mutateAsync(imageFormData)
    })

    const results = await Promise.allSettled(promises)
    return results
      .filter((result) => result.status === "fulfilled")
      .map((result) => {
        if (result.status === "rejected") {
          throw new Error()
        }
        return result.value.fileUrl
      })
  }

  const deleteFile = async (idx: number) => {
    const copy = [...files]
    copy.splice(idx, 1)
    setFiles([...copy])
  }

  return {
    files,
    onChangeFile,
    deleteFile,
  }
}
