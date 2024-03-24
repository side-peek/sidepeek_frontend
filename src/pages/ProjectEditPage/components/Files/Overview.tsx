import { Box, Image } from "@chakra-ui/react"

import FileUploadBox from "@pages/ProjectEditPage/components/Files/FileUploadBox"
import { usePostFileMutation } from "@pages/ProjectEditPage/hooks/usePostFileMutation"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"

import FileUploadSection from "./FileUploadSection"

const Overview = () => {
  const { getValues, setValue, watch } = useProjectFormContext()
  const { mutateAsync } = usePostFileMutation({
    onError: () => {
      alert("파일 업로드에 실패했습니다")
    },
  })

  const onDropFile = async (files: File[], fileIdx: number) => {
    const { fileUrl } = await mutateAsync(files[0])

    setValue(
      "overviewImageUrl",
      getValues("overviewImageUrl")?.map((image, idx) =>
        fileIdx === idx ? fileUrl : image,
      ),
    )
  }

  const deleteFile = (fileIdx: number) => {
    setValue(
      "overviewImageUrl",
      getValues("overviewImageUrl")?.map((image, idx) =>
        fileIdx === idx ? "" : image,
      ),
    )
  }

  return (
    <>
      {watch("overviewImageUrl")?.map((image, idx) => {
        return (
          <Box
            key={idx}
            boxSize="10rem"
            cursor="pointer">
            {image ? (
              <Image
                src={image}
                key={idx}
                loading="lazy"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => deleteFile(idx)}
              />
            ) : (
              <FileUploadSection
                onDrop={(e) => {
                  onDropFile(e, idx)
                }}
                multiple={false}
                accept={{ "image/*": [".jpeg", ".png"] }}>
                {(inputProps) => (
                  <FileUploadBox
                    {...inputProps}
                    id="overviewImageUrl"
                    placeholder="클릭해서 사진을 업로드해주세요"
                  />
                )}
              </FileUploadSection>
            )}
          </Box>
        )
      })}
    </>
  )
}

export default Overview
