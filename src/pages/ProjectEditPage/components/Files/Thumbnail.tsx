import { Box, Img } from "@chakra-ui/react"

import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { useFileUpload } from "@pages/ProjectEditPage/hooks/useFileUpload"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Thumbnail = () => {
  const { getValues, setValue } = useProjectFormContext()
  const { onChangeFile } = useFileUpload()

  return (
    <>
      <FileUploadSection
        onDrop={async (files) => {
          const file = await onChangeFile(files)
          setValue("thumbnailUrl", file[0])
        }}
        maxFiles={1}
        multiple={false}>
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
