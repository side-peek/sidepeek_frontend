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
          <StyledTab>
            {isLargerThan500 ? (
              tabsType.JOINED
            ) : (
              <Box>
                {[0, 1].map((line) => (
                  <p key={`tabsType.JOINED - ${line}`}>
                    {tabsType.JOINED.split(" ")[line]}
                  </p>
                ))}
              </Box>
            )}
          </StyledTab>
          {isMe && (
            <>
              <StyledTab>
                {isLargerThan500 ? (
                  tabsType.LIKED
                ) : (
                  <Box>
                    {[0, 1].map((line) => (
                      <p key={`tabsType.LIKED - ${line}`}>
                        {tabsType.LIKED.split(" ")[line]}
                      </p>
                    ))}
                  </Box>
                )}
              </StyledTab>
              <StyledTab>
                {isLargerThan500 ? (
                  tabsType.COMMENTED
                ) : (
                  <Box>
                    {[0, 1].map((line) => (
                      <p key={`tabsType.COMMENTED - ${line}`}>
                        {tabsType.COMMENTED.split(" ")[line]}
                      </p>
                    ))}
                  </Box>
                )}
              </StyledTab>
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
