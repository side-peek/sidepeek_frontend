import { Box, Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { Project } from "api-models"

import ProjectDetailDescriptionContent from "./ProjectDetailDescriptionContent"

interface ProjectDetailDescriptionProps {
  projects: Project
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
          <ProjectDetailDescriptionContent content={projects.description} />
          <ProjectDetailDescriptionContent content={projects.troubleShooting} />
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ProjectDetailDescription
