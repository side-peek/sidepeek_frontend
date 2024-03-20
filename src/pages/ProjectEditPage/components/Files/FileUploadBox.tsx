import { forwardRef } from "react"
import { DropzoneInputProps } from "react-dropzone"
import { IoCameraOutline } from "react-icons/io5"

import { Center, FormLabel, Text } from "@chakra-ui/react"

interface FileUploadBoxProps extends DropzoneInputProps {
  id: string
  placeholder: string
  boxSize?: string | number
  backgroundColor?: string
}

const FileUploadBox = forwardRef<HTMLInputElement, FileUploadBoxProps>(
  ({ id, placeholder, boxSize, backgroundColor, ...props }, ref) => {
    return (
      <Center
        bgColor={backgroundColor || "grey.300"}
        boxSize={boxSize}>
        <FormLabel htmlFor={id}>
          <Center
            flexDir="column"
            cursor="pointer">
            <IoCameraOutline size="3rem" />
            <Text>{placeholder}</Text>
          </Center>
        </FormLabel>
        <input
          type="file"
          id={id}
          ref={ref}
          {...props}
        />
      </Center>
    )
  },
)

FileUploadBox.displayName = "FileUploadBox"

export default FileUploadBox
