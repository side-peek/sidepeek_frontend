import {
  Box,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import { tabsType } from "@pages/ProfilePage/constants/constants"
import StyledTab from "@pages/ProfilePage/styles/StyledTab"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import ProjectsGrid from "./ProjectsGrid"

const ProjectsView = ({ userId, isMe }: UserIdProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  const projectsType = isMe ? ["JOINED", "LIKED", "COMMENTED"] : ["JOINED"]

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
              _selected: { fontFamily: "SCDream_Bold", color: "black.100" },
            },
          }}>
          <StyledTab>{tabsType.JOINED}</StyledTab>
          {isMe && (
            <>
              <StyledTab>{tabsType.LIKED}</StyledTab>
              <StyledTab>{tabsType.COMMENTED}</StyledTab>
            </>
          )}
        </TabList>
        <TabPanels>
          {projectsType.map((type) => (
            <TabPanel key={type}>
              <ProjectsGrid
                userId={userId}
                type={type}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default withUserId(ProjectsView)
