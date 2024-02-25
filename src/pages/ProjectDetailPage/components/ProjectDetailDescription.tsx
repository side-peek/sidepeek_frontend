import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"
import { Project } from "api-models"

interface ProjectDetailDescriptionProps {
  projects: Project
}

const ViewStyleParams = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.3",
}

const ProjectDetailDescription = ({
  projects,
}: ProjectDetailDescriptionProps) => {
  return (
    <Box
      paddingTop="10rem"
      maxW="100rem"
      w="100%"
      margin="0 auto">
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
              <Box data-color-mode="light">
                <MDEditor.Markdown
                  source={projects.description}
                  style={{ ...ViewStyleParams }}
                />
              </Box>
            }
          </TabPanel>
          <TabPanel>
            {
              <Box data-color-mode="light">
                <MDEditor.Markdown
                  source={projects.troubleShooting}
                  style={{ ...ViewStyleParams }}
                />
              </Box>
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ProjectDetailDescription
