import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"
import { Project } from "api-models"

interface ProjectDetailDescriptionProps {
  projects: Project
}

const ProjectDetailDescription = ({
  projects,
}: ProjectDetailDescriptionProps) => {
  const ViewStyleParams = {
    whiteSpace: "pre-wrap",
    padding: "2rem",
    lineHeight: "1.3",
  }

  return (
    <div
      style={{
        paddingTop: "10rem",
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
            {
              <div
                className="markdownDiv"
                data-color-mode="light">
                <MDEditor.Markdown
                  source={projects.description}
                  style={{ ...ViewStyleParams }}
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
                  style={{ ...ViewStyleParams }}
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
