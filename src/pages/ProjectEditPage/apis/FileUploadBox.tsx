import { ChangeEventHandler } from "react"
import { IoCameraOutline } from "react-icons/io5"

import { Center, CenterProps, FormLabel, Input, Text } from "@chakra-ui/react"

interface FileUploadBoxProps extends CenterProps {
  id: string
  placeholder: string
  accept?: string
  onUpload: ChangeEventHandler<HTMLInputElement>
}

const FileUploadBox = ({
  id,
  placeholder,
  accept = "",
  onUpload,
  ...props
}: FileUploadBoxProps) => {
  return (
    <Center
      bgColor="grey.400"
      {...props}>
      <FormLabel htmlFor={id}>
        <Center
          flexDir="column"
          cursor="pointer">
          <IoCameraOutline size="3rem" />
          <Text>{placeholder}</Text>
        </Center>
      </FormLabel>
      <Input
        type="file"
        display="none"
        id={id}
        accept={accept}
        onChange={onUpload}
      />
    </Center>
  )
}

export default FileUploadBox
