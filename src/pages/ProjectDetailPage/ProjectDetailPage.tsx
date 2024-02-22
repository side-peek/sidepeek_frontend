import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Editor } from "@tinymce/tinymce-react"

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
        apiKey="9kumhl5tzbzra1rjs4ryl8egsfr42a71nuo45p53enbpzlaw"
        init={{
          menubar: false,
          text_patterns: [
            { start: "*", end: "*", format: "italic" },
            { start: "**", end: "**", format: "bold" },
            { start: "#", format: "h1" },
            { start: "##", format: "h2" },
            { start: "###", format: "h3" },
            { start: "####", format: "h4" },
            { start: "#####", format: "h5" },
            { start: "######", format: "h6" },
            { start: "1. ", cmd: "InsertOrderedList" },
            { start: "* ", cmd: "InsertUnorderedList" },
            { start: "- ", cmd: "InsertUnorderedList" },
          ],
          plugins: "preview link image lists",
          toolbar:
            "preview blocks fontfamily fontsize | bold italic underline strikethrough | link image",
        }}
        initialValue="내용을 입력해주세요"
      />

      <Tabs
        variant="enclosed"
        size="lg"
        colorScheme="blue.100"
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
