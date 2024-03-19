import { useState } from "react"

import { useMutation } from "@tanstack/react-query"

import { postFile } from "@apis/file/postFile"

const useFileUpload = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [fileBase64, setFileBase64] = useState<string | undefined>()
  const [responsedFileUrl, setResponsedFileUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader()

      reader.onload = (event: ProgressEvent<FileReader>) => {
        const base64 = event.target?.result as string
        resolve(base64)
      }

      reader.readAsDataURL(file)
    })
  }

  const uploadFileMutation = useMutation({
    mutationFn: async (file: File) => await postFile(file),
    onMutate() {
      setIsSubmitting(true)
    },
    onSuccess(data) {
      setResponsedFileUrl(data?.fileUrl)
      setIsSubmitting(false)
    },
  })

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0]
      const base64 = await convertFileToBase64(selectedFile)
      setFileBase64(base64)

      uploadFileMutation.mutate(selectedFile)
    }
  }

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()

    if (event?.dataTransfer?.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleFileDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const files = event?.dataTransfer?.files

    if (files && files?.length > 0) {
      const selectedFile = files[0]

      const base64 = await convertFileToBase64(selectedFile)
      setFileBase64(base64)

      uploadFileMutation.mutate(selectedFile)
    }
    setIsDragging(false)
  }

  return {
    uploadFileMutation,
    convertFileToBase64,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileDrop,
    isDragging,
    isSubmitting,
    fileBase64,
    responsedFileUrl,
  }
}

export default useFileUpload
