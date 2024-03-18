import { Box, Img } from "@chakra-ui/react"

import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { useFileUpload } from "@pages/ProjectEditPage/hooks/useFileUpload"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Thumbnail = () => {
  const { getValues, setValue, watch } = useProjectFormContext()
  const { onChangeFile } = useFileUpload()

  const onDropFile = async (file: File[]) => {
    const fileUrls = await onChangeFile(file)
    if (!fileUrls.length) {
      return
    }
    setValue("thumbnailUrl", fileUrls[0])
  }

  console.log(watch("thumbnailUrl"))

  return (
    <>
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
      <Box>
        <Img src={getValues("thumbnailUrl")} />
      </Box>
    </>
  )
}

export default Thumbnail
