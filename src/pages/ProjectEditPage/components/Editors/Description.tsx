import { Controller, FieldPath } from "react-hook-form"

import { Box, useToast } from "@chakra-ui/react"
import MDEditor, { commands } from "@uiw/react-md-editor"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"

import { usePostFileMutation } from "@pages/ProjectEditPage/hooks/usePostFileMutation"
// import { useFileUpload } from "@pages/ProjectEditPage/hooks/useFileUpload"
import { useProjectFormContext } from "@pages/ProjectEditPage/hooks/useProjectFormContext"
import { ProjectFormValues } from "@pages/ProjectEditPage/types/ProjectFormValues"

import FileUploadBox from "../Files/FileUploadBox"
import FileUploadSection from "../Files/FileUploadSection"
import ErrorText from "../styles/ErrorText"
import UploadIcon from "./components/UpdateIcon"

const Description = ({ name }: { name: FieldPath<ProjectFormValues> }) => {
  const {
    control,
    formState: { errors },
  } = useProjectFormContext()

  const toast = useToast()

  const { mutateAsync } = usePostFileMutation({
    onError: () => {
      toast({
        status: "error",
        title: "파일 업로드에 실패했습니다",
      })
    },
  })

  return (
    <>
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <ErrorText message={message} />}
      />
      <Controller
        control={control}
        name={name}
        // rules={{ required: "필수로 입력해주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MDEditor
            onChange={onChange}
            onBlur={onBlur}
            value={value as string}
            commands={[
              commands.image,
              commands.divider,
              commands.divider,
              commands.fullscreen,
              commands.group(
                [
                  commands.title1,
                  commands.title2,
                  commands.title3,
                  commands.title4,
                  commands.title5,
                  commands.title6,
                ],
                {
                  name: "title",
                  groupName: "title",
                  buttonProps: { "aria-label": "Insert title" },
                },
              ),
              commands.group([], {
                name: "update",
                groupName: "update",
                icon: <UploadIcon />,
                buttonProps: { "aria-label": "Insert title" },
                children: ({ close, textApi }) => {
                  return (
                    <Box>
                      <FileUploadSection
                        onDrop={async (files) => {
                          const { fileUrl } = await mutateAsync(files[0])
                          textApi?.replaceSelection(`![](${[fileUrl]})`)
                          close()
                        }}
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
                      <button
                        type="button"
                        onClick={close}>
                        Close
                      </button>
                    </Box>
                  )
                },
              }),
            ]}
          />
        )}
      />
    </>
  )
}

export default Description
