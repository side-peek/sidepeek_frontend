import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import { Project } from "api-models"

import ExplanationItem from "./ExplanationItem"

interface ExplanationProps {
  projects: Project
}

const Explanation = ({ projects }: ExplanationProps) => {
  return (
    <Center
      margin="0 auto"
      w="100%">
      <Tabs
        w="100%"
        size="lg"
        variant="enclosed"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab borderTopRadius="1rem">
            <Text
              fontSize="2rem"
              _hover={{ opacity: 0.5 }}>
              기능
            </Text>
          </Tab>
          <Tab borderTopRadius="1rem">
            <Text
              fontSize="2rem"
              _hover={{ opacity: 0.5 }}>
              트러블 슈팅
            </Text>
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
    </Center>
  )
}

export default Explanation
