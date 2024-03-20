import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { useFileUpload } from "@pages/ProjectEditPage/hooks/useFileUpload"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Overview = () => {
  const MAX_FILE_UPLOAD = 6
  const { getValues, setValue } = useProjectFormContext()
  const { onChangeFile } = useFileUpload()

  const onDropFile = async (files: File[]) => {
    const prevImageUrls = getValues("overviewImageUrl")
    if (
      prevImageUrls &&
      prevImageUrls.length + files.length > Number(`${MAX_FILE_UPLOAD}`)
    ) {
      alert("최대 6개까지 업로드 가능합니다")
      return
    }
    const fileUrls = await onChangeFile(files)
    if (!fileUrls.length) {
      return
    }
    setValue("overviewImageUrl", [...prevImageUrls, ...fileUrls])
  }

  return (
    <>
      <FileUploadSection
        onDrop={onDropFile}
        maxFiles={6}
        disabled={
          getValues("overviewImageUrl")?.length >= Number(`${MAX_FILE_UPLOAD}`)
        }
        multiple={true}
        accept={{ "image/*": [".jpeg", ".png"] }}>
        {(inputProps) => (
          <FileUploadBox
            {...inputProps}
            id="overviewImageUrl"
            placeholder="최대 6개까지 업로드 가능합니다"
          />
        )}
      </FileUploadSection>
    </>
  )
}

export default Overview
