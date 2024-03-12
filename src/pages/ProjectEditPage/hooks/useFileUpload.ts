import { useEffect, useRef, useState } from "react"

import { postProjectFiles } from "@api/projectFile/postProjectFiles"

import { FileUploadStateType } from "../types/FileUploadStateType"

export const useFileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [files, setFiles] = useState<
    FileUploadStateType<{ fileUrl: string }>[]
  >([])

  const onChangeFile = async (e: Event, fileLength: number) => {
    if (!(e.target as HTMLInputElement).files) return
    const selectFiles = (e.target as HTMLInputElement).files as FileList
    const uploadFiles = Array.from(selectFiles)

    if (files.length + uploadFiles.length > 6) {
      alert("더이상 추가할 수 없습니다")
      return
    }

    const promises = Object.values(uploadFiles).map((file, idx) => {
      const imageFormData = new FormData()
      imageFormData.append("file", file)

      const index = fileLength + idx - 1 < 0 ? 0 : fileLength + idx

      setFiles((prev) => [
        ...prev,
        { isLoading: true, error: null, data: null },
      ])

      return postProjectFiles(imageFormData)
        .then((data) => {
          setFiles((prev) => {
            console.log(index)

            const updatedFiles = [...prev]
            updatedFiles[index] = {
              isLoading: false,
              error: null,
              data,
            }
            return updatedFiles
          })
        })
        .catch((error) => {
          // 실패 시 파일 상태 업데이트
          setFiles((prev) => {
            console.log(index)

            const updatedFiles = [...prev]
            updatedFiles[index] = {
              isLoading: false,
              error,
              data: null,
            }
            return updatedFiles
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
  }, [inputRef, files])

  return {
    inputRef,
    files,
  }
}
