import { Center, Image } from "@chakra-ui/react"

import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { usePostFileMutation } from "@pages/ProjectEditPage/hooks/usePostFileMutation"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Thumbnail = () => {
  const { setValue, watch } = useProjectFormContext()
  const { mutateAsync } = usePostFileMutation({})

  const onDropFile = async (file: File[]) => {
    const { fileUrl } = await mutateAsync(file[0])
    setValue("thumbnailUrl", fileUrl)
  }

  const deleteFile = () => {
    setValue("thumbnailUrl", "")
  }

  return (
    <Center
      width="100%"
      height="30rem"
      bg="whitesmoke"
      borderRadius="1rem"
      cursor="pointer"
      overflow="hidden"
      shadow="xl">
      {watch("thumbnailUrl") ? (
        <Image
          src={watch("thumbnailUrl")}
          onClick={deleteFile}
          width="100%"
          height="100%"
          objectFit="contain"
        />
      ) : (
        <FileUploadSection
          onDrop={onDropFile}
          maxFiles={1}
          multiple={false}
          accept={{ "image/*": [".jpeg", ".png"] }}>
          {(inputProps) => (
            <FileUploadBox
              {...inputProps}
              id="thumbnail"
              placeholder="대표 사진을 업로드해주세요"
            />
          )}
        </FileUploadSection>
      )}
    </Center>
  )
}

export default Thumbnail
