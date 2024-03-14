import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react"

import ProjectFormProvider from "../stores/ProjectFormProvider"
import MemberFields from "./MemberFields/MemberFields"
import ProjectInputBox from "./ProjectInputBox"
import TechStacksFields from "./TechStacksFields/TechStackFields"

const ProjectForm = () => {
  return (
    <ProjectFormProvider>
      <Flex
        flexDir="column"
        gap="30px">
        <ProjectInputBox
          name="thumbnailUrl"
          label="사진">
          <input
            type="file"
            accept="image/*"
          />
        </ProjectInputBox>

        <ProjectInputBox
          name="name"
          label="제목"
          footer="제목은 필수입니다">
          <Input />
        </ProjectInputBox>

        <ProjectInputBox
          name="subName"
          label="소제목">
          <Input />
        </ProjectInputBox>

        <ProjectInputBox
          name="overview"
          label="요약">
          <Textarea
            resize="none"
            height="10rem"
          />
        </ProjectInputBox>

        <ProjectInputBox
          name="githubUrl"
          label="Github URL">
          <Input />
        </ProjectInputBox>

        <ProjectInputBox
          name="deployUrl"
          label="배포 URL">
          <Input />
        </ProjectInputBox>

        <label htmlFor="techStacks">
          <Text>기술 스택</Text>
          <TechStacksFields />
        </label>

        <label htmlFor="members">
          <Text>멤버</Text>
          <MemberFields />
        </label>

        <Button type="submit">제출</Button>
      </Flex>
    </ProjectFormProvider>
  )
}

export default ProjectForm
