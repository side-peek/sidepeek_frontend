import { Box, Center, Fade } from "@chakra-ui/react"

import DefaultValueFetcher from "./components/DefaultValueFetcher"

const ProjectEditPage = () => {
  return (
    <Fade in={true}>
      <Center>
        <Box padding="3rem">
          <DefaultValueFetcher />
        </Box>
      </Center>
    </Fade>
  )
}

export default ProjectEditPage
