import { FaGithub } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

import { Button, Flex } from "@chakra-ui/react"

const ProjectDetailSummaryLink = () => {
  return (
    <Flex
      gap="2rem"
      pl="5rem">
      <Button
        borderRadius="2rem"
        size="lg"
        bgColor="blue.100"
        color="white"
        fontSize="xl"
        p="2.2rem 1.5rem"
        leftIcon={<TbWorld />}>
        WEB
      </Button>
      <Button
        p="2.2rem 1.5rem"
        borderRadius="2rem"
        colorScheme="blue"
        size="lg"
        leftIcon={<FaGithub />}>
        Github
      </Button>
    </Flex>
  )
}

export default ProjectDetailSummaryLink
