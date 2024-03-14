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
import { ProjectsType } from "@pages/ProfilePage/types/types"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import ProjectsGrid from "./ProjectsGrid"

const ProjectsView = ({ userId }: UserIdProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  const projectsType: ProjectsType[] = ["JOINED", "LIKED", "COMMENTED"]

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
          <StyledTab>{tabsType.JOINED}</StyledTab>
          <StyledTab>{tabsType.LIKED}</StyledTab>
          <StyledTab>{tabsType.COMMENTED}</StyledTab>
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
