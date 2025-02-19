import { useEffect, useState } from "react"

import {
  Box,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import useQueryString from "@hooks/useQueryString"

import { tabsType } from "@pages/ProfilePage/constants/constants"
import usePageInfoStore from "@pages/ProfilePage/stores/usePageInfoStore"
import StyledTab from "@pages/ProfilePage/styles/StyledTab"

import withUserId, { UserIdProps } from "../HOC/withUserId"
import ProjectsGrid from "./ProjectsGrid"

const ProjectsView = ({ userId, isMe }: UserIdProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projectsType = isMe ? ["JOINED", "LIKED", "COMMENTED"] : ["JOINED"]

  const { location, navigate, paramsValue: tabInfo } = useQueryString("tab")
  const { paramsValue: tempPageInfo } = useQueryString("page")
  const pageInfo = Number(tempPageInfo)

  const { tabPageInfo } = usePageInfoStore((state) => state)

  const [tabIndex, setTabIndex] = useState<number>(0)

  useEffect(() => {
    const newIndex = projectsType.findIndex(
      (projectType) => projectType === tabInfo,
    )
    setTabIndex(newIndex >= 0 ? newIndex : 0)
  }, [location, projectsType, tabInfo])

  const handleChangeTab = (index: number) => {
    const storedPage = tabPageInfo[projectsType[index]]
    navigate(
      `?tab=${projectsType[index]}&page=${storedPage !== 0 ? storedPage : 1}`,
    )
  }

  return (
    <Box
      height="100%"
      mt="2rem">
      <Tabs
        index={tabIndex}
        variant="enclosed"
        isFitted={!isLargerThan500}
        size="lg"
        onChange={(index) => handleChangeTab(index)}>
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
                defaultPage={pageInfo}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default withUserId(ProjectsView)
