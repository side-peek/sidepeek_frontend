import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react"

import Description from "./Editors/Description"
import Overview from "./Files/Overview"
import Thumbnail from "./Files/Thumbnail"
import MemberFields from "./MemberFields/MemberFields"
import ProjectInputBox from "./ProjectInputBox"
import TechStacksFields from "./TechStacksFields/TechStackFields"

const ProjectForm = () => {
  return (
    <Box>
      <Flex
        flexDir="column"
        gap="30px">
        <Thumbnail />
        <Grid
          mt="0.5rem"
          templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
          gap={0}>
          <Overview />
        </Grid>

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

        <Flex justifyContent="space-between">
          <ProjectInputBox
            name="startDate"
            label="시작일"
            width="30rem">
            <Input type="date" />
          </ProjectInputBox>

          <ProjectInputBox
            name="endDate"
            label="종료일"
            width="30rem">
            <Input type="date" />
          </ProjectInputBox>
        </Flex>

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

        <FormControl>
          <FormLabel
            htmlFor="teckStacks"
            as="b">
            <Text as="b">기술스택</Text>
          </FormLabel>
          <FormHelperText>
            기술 스택 분야와, 한개 이상의 기술을 작성해주세요.
          </FormHelperText>
          <TechStacksFields />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="members">
            <Text as="b">멤버</Text>
          </FormLabel>
          <FormHelperText>
            분야와 함께 작업한 팀원을 넣어주세요. 본인은 필수로 입력되어야
            합니다
          </FormHelperText>
          <MemberFields />
        </FormControl>

        <Box>
          <FormLabel htmlFor="members">
            <Text as="b">요약</Text>
          </FormLabel>
          <Description name="description" />
        </Box>

        <Box>
          <FormLabel htmlFor="members">트러블 슈팅</FormLabel>
          <Description name="troubleShooting" />
        </Box>
      </Flex>
    </Box>
  )
}

export default ProjectForm
