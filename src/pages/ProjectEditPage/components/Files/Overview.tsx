import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { useFileUpload } from "@pages/ProjectEditPage/hooks/useFileUpload"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Overview = () => {
  const { getValues, setValue } = useProjectFormContext()
  const { onChangeFile } = useFileUpload()

  return (
    <>
      <FileUploadSection
        onDrop={async (files) => {
          const prev = getValues("overviewImageUrl")
          if (prev && prev.length + files.length > 6) {
            alert("최대 6개까지 업로드 가능합니다")
            return
          }
          const file = await onChangeFile(files)
          setValue("overviewImageUrl", [...prev, ...file])
        }}
        maxFiles={6}
        disabled={getValues("overviewImageUrl").length >= 6}
        multiple={true}>
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
