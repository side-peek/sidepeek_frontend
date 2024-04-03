import { forwardRef } from "react"
import { DropzoneInputProps } from "react-dropzone"

import { Center, FormLabel, Text } from "@chakra-ui/react"
import { IoCameraOutline } from "@react-icons/all-files/io5/IoCameraOutline"

interface FileUploadBoxProps extends DropzoneInputProps {
  id: string
  placeholder: string
  boxSize?: string | number
  backgroundColor?: string
}

const FileUploadBox = forwardRef<HTMLInputElement, FileUploadBoxProps>(
  ({ id, placeholder, ...props }, ref) => {
    return (
      <>
        <FormLabel
          display="flex"
          w="100%"
          h="100%"
          cursor="pointer"
          _hover={{ bg: "gray.100" }}
          htmlFor={id}>
          <Center
            w="100%"
            flexDir="column"
            justifyContent="center"
            alignItems="center">
            <IoCameraOutline size="3rem" />
            <Text
              textAlign="center"
              fontFamily="SCDream_Regular"
              color="gray.600"
              fontSize="1.2rem">
              {placeholder}
            </Text>
          </Center>
        </FormLabel>
        <input
          type="file"
          id={id}
          ref={ref}
          {...props}
        />
      </>
    )
  },
)

FileUploadBox.displayName = "FileUploadBox"

export default FileUploadBox
