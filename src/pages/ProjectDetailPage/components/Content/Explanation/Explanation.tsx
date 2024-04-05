import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Project } from "api-models"

import ExplanationItem from "./ExplanationItem"

interface ExplanationProps {
  projects: Project
}

const Explanation = ({ projects }: ExplanationProps) => {
  return (
    <Box>
      <Tabs
        w="100%"
        size="lg"
        variant="enclosed"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab
            borderTopRadius="1rem"
            fontSize="2xl"
            _hover={{ opacity: 0.5 }}>
            기능
          </Tab>
          <Tab
            borderTopRadius="1rem"
            fontSize="2xl"
            _hover={{ opacity: 0.5 }}>
            트러블 슈팅
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ExplanationItem content={projects.description} />
          </TabPanel>
          <TabPanel>
            <ExplanationItem content={projects.troubleShooting} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Explanation
