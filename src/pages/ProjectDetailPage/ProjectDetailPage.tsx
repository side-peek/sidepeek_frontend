import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import "@toast-ui/editor/dist/i18n/ko-kr"
import "@toast-ui/editor/dist/toastui-editor.css"

import ProjectDetailViewer from "./ProjectDetailViewer"

const feature = `## 🎫 관련 이슈
<!--이슈 태스크를 모두 완료하고 닫는다면 Resolves #번호-->
<!--이슈 태스크를 모두 완료하지는 못 했지만 닫는다면 Closes #번호-->
<!--이슈 태스크를 일부 완료하고 열어둔다면 Fixes #번호-->
Resolves #28 

## ✅ 구현 내용
<!--빠른 리뷰를 위해 이해를 도울 만한 설명이 있다면 적어주세요!-->
- [x] AWS S3연동 및 기능 구현을 위한 환경 설정
  - 'application/yml'에서 파일 용량 제한 설정
  - 'sidepeek_backend_secret/application-datasource-local.yml'에서 AWS S3 설정 추가
    - s3설정도 들어가서 파일 이름을 바꿔도 좋을 것 같다는 생각이 들었습니다!
  - 환경변수로 AWS 엑세스 키와 시크릿 키 적용(커밋에는 안나와있습니다!)
- [x] S3 연동 설정
- [x] 파일(이미지, 영상) 저장 api 구현
- [x] 이미지 저장 관련 예외처리 -> FileService에 TODO 표시 + 컨트롤러 어드바이스 적용
- [x] 서비스 레이어 테스트 코드 작성  
- [x] Swagger 적용

## 💬 코멘트
<!-- PR 올리면서 팀원들에게 공유할 사항 및 이슈가 있다면 적어주세요!-->
- 현재 제 AWS 계정으로 S3 연동해가지구 내일 IAM 계정 의진이(@uijin-j )한테 물어본 후에 세팅할 예정입니다! 
  - github secrets 재설정
  - sidepeek_backend_secret 버킷 이름 및 베이스 path 수정
  -  설정 후 AWS S3 키 반영된 .env 파일 공유
 - 블로그는 오늘 안으로 올리겟습니다!
 - 🚨 .env 설정에 AWS 키 설정이 필요합니다!`

const markdown = `## 리트리버
<img src="https://github.com/side-peek/sidepeek_frontend/assets/106851561/d8928c19-1ad8-4e08-bb2a-60606f52db5c" width="500" />
<img src="https://velog.velcdn.com/images/gnsdh8616/post/6fd04a97-05d1-4c51-a20d-74872e48b37b/image.png" width="400" />
`

const ProjectDetailPage = () => {
  return (
    <div
      style={{
        paddingTop: "15rem",
        maxWidth: "100rem",
        width: "100%",
        margin: "0 auto",
      }}>
      <Tabs
        variant="enclosed"
        size="lg"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab _hover={{ opacity: 0.5 }}>기능</Tab>
          <Tab _hover={{ opacity: 0.5 }}>트러블 슈팅</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProjectDetailViewer content={feature} />
          </TabPanel>
          <TabPanel>
            <ProjectDetailViewer content={markdown} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ProjectDetailPage
