import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import MDEditor from "@uiw/react-md-editor"
import { Project } from "api-models"

interface ProjectDetailDescriptionProps {
  projects: Project
}

const ViewStyleParams = {
  whiteSpace: "pre-wrap",
  padding: "2rem",
  lineHeight: "1.5",
  fontFamily: "SCDream_Regular",
}

const ProjectDetailDescription = ({
  projects,
}: ProjectDetailDescriptionProps) => {
  return (
    <Box
      padding="5rem"
      w="100%"
      maxW="100rem"
      margin="0 auto">
      <Tabs
        size="lg"
        variant="enclosed"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab
            borderTopRadius="1rem"
            bgSize="2rem">
            <Text _hover={{ opacity: 0.5 }}>기능</Text>
          </Tab>
          <Tab borderTopRadius="1rem">
            <Text _hover={{ opacity: 0.5 }}>트러블 슈팅</Text>
          </Tab>
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
