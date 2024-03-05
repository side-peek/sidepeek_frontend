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

import SummaryTabItem from "./SummaryTabItem"

interface SummaryTabListProps {
  projects: Project
}

const SummaryTabList = ({ projects }: SummaryTabListProps) => {
  return (
    <Center
      padding="5rem"
      maxW="100rem"
      margin="0 auto">
      <Tabs
        size="lg"
        variant="enclosed"
        fontFamily="SCDream_Bold">
        <TabList>
          <Tab borderTopRadius="1rem">
            <Text _hover={{ opacity: 0.5 }}>기능</Text>
          </Tab>
          <Tab borderTopRadius="1rem">
            <Text _hover={{ opacity: 0.5 }}>트러블 슈팅</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SummaryTabItem content={projects.description} />
          </TabPanel>
          <TabPanel>
            <SummaryTabItem content={projects.troubleShooting} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  )
}

export default SummaryTabList
