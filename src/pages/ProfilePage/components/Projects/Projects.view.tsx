import {
  Box,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import StyledTab from "@pages/ProfilePage/styles/StyledTab"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import ProjectsGrid from "./ProjectsGrid"

const ProjectsView = ({ userId }: UserIdProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  const tabs = ["JOINED", "LIKED", "COMMENTED"]

  return (
    <Box
      height="100%"
      mt="2rem">
      <Tabs
        size="lg"
        isFitted={!isLargerThan500}
        variant="enclosed">
        <TabList
          h="6rem"
          sx={{
            "& > *": {
              _selected: { fontFamily: "SCDream_Bold", color: "#000000" },
            },
          }}>
          <StyledTab>내 프로젝트</StyledTab>
          <StyledTab>좋아요한 프로젝트</StyledTab>
          <StyledTab>댓글단 프로젝트</StyledTab>
        </TabList>
        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab}>
              <ProjectsGrid
                userId={userId}
                tab={tab}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default withUserId(ProjectsView)
