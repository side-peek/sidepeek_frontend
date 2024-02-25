import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"
import { Project } from "api-models"

interface ProjectDetailDescriptionProps {
  projects: Project
}

const ProjectDetailDescription = ({
  projects,
}: ProjectDetailDescriptionProps) => {
  console.log(projects)
  //   const [text, setText] = useState("")
  //   const [description, setDescription] = useState({
  //     content: "",
  //   })
  //   console.log(description)

  //   useEffect(() => {
  //     setDescription({ content: text })
  //   }, [text])

  const ViewStyleParams = {
    whiteSpace: "pre-wrap",
    padding: "1rem",
    lineHeight: "0.5",
  }

  return (
    <div
      style={{
        paddingTop: "15rem",
        maxWidth: "100rem",
        width: "100%",
        margin: "0 auto",
      }}>
      {/* <MDEditor
        data-color-mode="light"
        value={text}
        onChange={setText}
        height="50rem"
      /> */}

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
                  source={projects.description}
                  {...ViewStyleParams}
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
                  source={projects.troubleShooting}
                  {...ViewStyleParams}
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
