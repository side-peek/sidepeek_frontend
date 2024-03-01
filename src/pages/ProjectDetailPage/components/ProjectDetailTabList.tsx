import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import ProjectDetailTabItem from "./ProjectDetailTabItem"

const ProjectDetailTabList = ({
  projectDetailInfo,
}: getProjectDetailResponseType) => {
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
            <ProjectDetailTabItem content={projectDetailInfo.description} />
          </TabPanel>
          <TabPanel>
            <ProjectDetailTabItem content={projectDetailInfo.troubleShooting} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  )
}

export default ProjectDetailTabList
