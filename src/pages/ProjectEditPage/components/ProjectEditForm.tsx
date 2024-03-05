import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import { Box, Button, Input, Textarea } from "@chakra-ui/react"

import { ProjectFormDefaultValues } from "../constants/defaultValues"
import { ProjectFormValues } from "../types/ProjectFormValues"
import InputBox from "./ProjectInputBox"

const ProjectEditForm = () => {
  const methods = useForm<ProjectFormValues>({
    defaultValues: ProjectFormDefaultValues,
  })

  const submitEventHandler: SubmitHandler<ProjectFormValues> = (data) => {
    console.log(data)
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitEventHandler)}>
          <InputBox
            name="thumbnailUrl"
            label="사진">
            <input
              type="file"
              accept="image/*"
            />
          </InputBox>

          <InputBox
            name="name"
            label="제목"
            footer="제목은 필수입니다">
            <Input />
          </InputBox>

          <InputBox
            name="subName"
            label="소제목">
            <Input />
          </InputBox>

          <InputBox
            name="overview"
            label="요약">
            <Textarea
              resize="none"
              height="10rem"
            />
          </InputBox>

          <InputBox
            name="githubUrl"
            label="Github URL">
            <Input />
          </InputBox>

          <InputBox
            name="deployUrl"
            label="배포 URL">
            <Input />
          </InputBox>

          <Button type="submit" />
        </form>
      </FormProvider>
    </Box>
  )
}

export default ProjectEditForm
