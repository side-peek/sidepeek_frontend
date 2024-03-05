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
      w="100%"
      margin="0 auto">
      <Tabs
        size="lg"
        variant="enclosed"
        fontFamily="SCDream_Bold">
        <TabList h="6rem">
          <Tab
            borderTopRadius="1rem"
            px="2rem"
            fontSize="2rem">
            <Text
              _hover={{ opacity: 0.5 }}
              size="5rem">
              기능
            </Text>
          </Tab>
          <Tab
            borderTopRadius="1rem"
            px="2rem"
            fontSize="2rem">
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
