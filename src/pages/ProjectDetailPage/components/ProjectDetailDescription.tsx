import { useEffect, useState } from "react"

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"

const ProjectDetailDescription = () => {
  const [text, setText] = useState("")
  const [description, setDescription] = useState({
    content: "",
  })

  useEffect(() => {
    setDescription({ content: text })
  }, [text])

  console.log(description)
  return (
    <div
      style={{
        paddingTop: "15rem",
        maxWidth: "100rem",
        width: "100%",
        margin: "0 auto",
      }}>
      <MDEditor
        data-color-mode="light"
        value={text}
        onChange={setText}
        height="50rem"
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
              <div
                className="markdownDiv"
                data-color-mode="light">
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
              <div
                className="markdownDiv"
                data-color-mode="light">
                <MDEditor.Markdown
                  source={text}
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: "0.5",
                    backgroundColor: "white",
                  }}
                />
              </div>
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ProjectDetailDescription
