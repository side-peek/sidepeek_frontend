import { ChangeEvent, useState } from "react"

import { isAxiosError } from "axios"

import { FileUploadStateType } from "../types/FileUploadStateType"
import { PostFormDataType } from "../types/PostFormDataType"
import { getTypedFormData } from "../types/TypedFormDataValue"
import { usePostFileMutation } from "./usePostFileMutation"

const MAX_FILE_UPLOAD = 6

type UseFileUploadDataType = {
  fileUrl: string
}

type FileState = FileUploadStateType<UseFileUploadDataType> & {
  imageFormData: PostFormDataType
}

export const useFileUpload = () => {
  const [files, setFiles] = useState<FileState[]>([])

  const { mutateAsync } = usePostFileMutation({
    onMutate: (imageFormData) => {
      setFiles((prev) => [
        ...prev,
        { isLoading: true, error: null, data: null, imageFormData },
      ])
    },
  })

  const updateFileState = (index: number, update: FileState) => {
    setFiles((prev) => {
      const updatedFiles = [...prev]
      updatedFiles[index] = { ...update }
      return updatedFiles
    })
  }

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const selectFiles = e.target.files
    const uploadFiles = Array.from(selectFiles)

    if (files.length + uploadFiles.length > MAX_FILE_UPLOAD) {
      alert("더이상 추가할 수 없습니다")
      return
    }

    const promises = Object.values(uploadFiles).map(async (file, idx) => {
      const imageFormData: PostFormDataType = getTypedFormData<{
        file: File
      }>()

      imageFormData.append("file", file)

      const index = files.length + idx - 1 < 0 ? 0 : files.length + idx

      try {
        const { fileUrl } = await mutateAsync(imageFormData)
        updateFileState(index, {
          isLoading: false,
          error: null,
          data: { fileUrl },
          imageFormData,
        })
      } catch (error) {
        if (isAxiosError(error)) {
          updateFileState(index, {
            isLoading: false,
            error,
            data: null,
            imageFormData,
          })
        }
      }
    })

    await Promise.allSettled(promises)
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
