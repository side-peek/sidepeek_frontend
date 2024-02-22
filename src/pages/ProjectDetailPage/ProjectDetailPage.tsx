import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Editor } from "@tinymce/tinymce-react"

import { pluginOption, toolbarOption } from "./constants/options"
import textPatterns from "./constants/textPatterns"

const apiKey = import.meta.env.VITE_TINYMCE_API_KEY

const ProjectDetailPage = () => {
  return (
    <div
      style={{
        paddingTop: "15rem",
        maxWidth: "100rem",
        width: "100%",
        margin: "0 auto",
      }}>
      <Editor
        apiKey={apiKey}
        init={{
          menubar: false,
          text_patterns: textPatterns,
          plugins: pluginOption,
          toolbar: toolbarOption,
        }}
        initialValue="내용을 입력해주세요"
      />

      <Tabs
        variant="enclosed"
        size="lg"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab _hover={{ opacity: 0.5 }}>기능</Tab>
          <Tab _hover={{ opacity: 0.5 }}>트러블 슈팅</Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ProjectDetailPage
