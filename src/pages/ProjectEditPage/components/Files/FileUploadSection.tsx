import { ReactNode } from "react"
import {
  DropzoneInputProps,
  DropzoneOptions,
  useDropzone,
} from "react-dropzone"

import { Box } from "@chakra-ui/react"

interface FileUploadAreaProps extends DropzoneOptions {
  children: (props: DropzoneInputProps) => ReactNode
}

const FileUploadSection = ({
  onDrop,
  accept,
  children,
  ...props
}: FileUploadAreaProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    ...props,
  })
  return (
    <Box
      {...getRootProps()}
      aria-label="File-Upload">
      {children(getInputProps())}
    </Box>
  )
}

export default FileUploadSection
