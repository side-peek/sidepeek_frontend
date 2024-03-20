import { Box, Button, Flex, FormLabel, Input, Textarea } from "@chakra-ui/react"

import ProjectFormProvider from "../stores/ProjectFormProvider"
import Description from "./Editors/Description"
import Overview from "./Files/Overview"
import Thumbnail from "./Files/Thumbnail"
import MemberFields from "./MemberFields/MemberFields"
import ProjectInputBox from "./ProjectInputBox"
import TechStacksFields from "./TechStacksFields/TechStackFields"

const ProjectForm = () => {
  return (
    <Box>
      <ProjectFormProvider>
        <Flex
          flexDir="column"
          gap="30px">
          <Flex justifyContent="space-between">
            <Thumbnail />
            <Overview />
          </Flex>
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
            name="startDate"
            label="시작일">
            <Input type="date" />
          </ProjectInputBox>

          <ProjectInputBox
            name="endDate"
            label="종료일">
            <Input type="date" />
          </ProjectInputBox>

          <ProjectInputBox
            name="overview"
            label="요약"
            footer="최대 150자까지 작성 가능합니다">
            <Textarea
              resize="none"
              overflow="hidden"
              fontSize="lg"
              h="10rem"
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

          <Box>
            <FormLabel htmlFor="teckStacks">기술스택</FormLabel>
            <TechStacksFields />
          </Box>

          <Box>
            <FormLabel htmlFor="members">멤버</FormLabel>
            <MemberFields />
          </Box>

          <Box>
            <FormLabel htmlFor="members">요약</FormLabel>
            <Description name="description" />
          </Box>

          <Box>
            <FormLabel htmlFor="members">트러블 슈팅</FormLabel>
            <Description name="troubleShooting" />
          </Box>

          <Button type="submit">제출</Button>
        </Flex>
      </ProjectFormProvider>
    </Box>
  )
}

export default ProjectForm
