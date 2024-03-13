import { useEffect, useRef, useState } from "react"

import { FileUploadStateType } from "../types/FileUploadStateType"
import { usePostFileMutation } from "./usePostFileMutation"

const MAX_FILE_UPLOAD = 6

export const useFileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [files, setFiles] = useState<
    FileUploadStateType<{ fileUrl: string }>[]
  >([])

  const updateFileState = (
    index: number,
    update: FileUploadStateType<{ fileUrl: string }>,
  ) => {
    setFiles((prev) => {
      const updatedFiles = [...prev]
      updatedFiles[index] = { ...update }
      return updatedFiles
    })
  }

  const { mutateAsync } = usePostFileMutation({
    onMutate: () => {
      setFiles((prev) => [
        ...prev,
        { isLoading: true, error: null, data: null },
      ])
    },
  })

  const onChangeFile = async (e: Event, fileLength: number) => {
    if (!(e.target as HTMLInputElement).files) return
    const selectFiles = (e.target as HTMLInputElement).files as FileList
    const uploadFiles = Array.from(selectFiles)

    if (files.length + uploadFiles.length > MAX_FILE_UPLOAD) {
      alert("더이상 추가할 수 없습니다")
      return
    }

    const promises = Object.values(uploadFiles).map((file, idx) => {
      const imageFormData = new FormData()
      imageFormData.append("file", file)

      const index = fileLength + idx - 1 < 0 ? 0 : fileLength + idx

      return mutateAsync(imageFormData)
        .then((data) => {
          updateFileState(index, { isLoading: false, error: null, data })
        })
        .catch((error) => {
          updateFileState(index, {
            isLoading: false,
            error,
            data: null,
          })
        })
    })

    await Promise.allSettled(promises)
  }

  useEffect(() => {
    if (!inputRef.current) return
    const { current } = inputRef
    const currentlength = files.length

    const handleFileChange = (e: Event) => {
      onChangeFile(e, currentlength)
    }
    inputRef.current.setAttribute("type", "file")

    inputRef.current.addEventListener("change", handleFileChange)
    return () => {
      current?.removeEventListener("change", handleFileChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  return {
    inputRef,
    files,
  }
}
