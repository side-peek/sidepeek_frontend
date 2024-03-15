const useFileUpload = () => {
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

  return { convertFileToBase64 }
}

export default useFileUpload
