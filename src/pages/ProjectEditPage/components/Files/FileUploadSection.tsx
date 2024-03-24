import { ReactNode } from "react"
import {
  DropzoneInputProps,
  DropzoneOptions,
  useDropzone,
} from "react-dropzone"

import { Box } from "@chakra-ui/react"

interface FileUploadAreaProps extends DropzoneOptions {
  children: (props: DropzoneInputProps) => ReactNode
  size?: string | number
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
      width="100%"
      {...getRootProps()}
      h="100%"
      aria-label="File-Upload">
      {children(getInputProps())}
    </Box>
  )
}

export default FileUploadSection
