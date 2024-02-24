import { useState } from "react"

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

const ProjectDetailPage = () => {
  const [text, setText] = useState("")
  console.log(text)
  return (
    <div
      style={{
        paddingTop: "15rem",
        maxWidth: "100rem",
        width: "100%",
        margin: "0 auto",
      }}>
      <MDEditor
        value={text}
        onChange={setText}
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
          <TabPanel>
            {
              <div>
                <MDEditor.Markdown
                  source={text}
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: "0.5",
                  }}
                />
              </div>
            }
          </TabPanel>
          <TabPanel>
            {
              <div>
                <MDEditor.Markdown
                  source={text}
                  style={{ whiteSpace: "pre-wrap", lineHeight: "0.5" }}
                />
              </div>
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ProjectDetailPage
