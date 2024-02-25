import { FaGithub } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

import { Button, Flex } from "@chakra-ui/react"

interface ProjectDetailSummaryLinkProps {
  deployUrl: string
  githubUrl: string
}

const ProjectDetailSummaryLink = ({
  deployUrl,
  githubUrl,
}: ProjectDetailSummaryLinkProps) => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }

  return (
    <Flex gap="2rem">
      <Button
        borderRadius="2rem"
        size="lg"
        bgColor="blue.100"
        color="#fff"
        fontSize="xl"
        p="2.2rem 1.5rem"
        _hover={{ opacity: "0.5" }}
        leftIcon={<TbWorld />}
        onClick={() => handleOpenNewTab(deployUrl)}>
        WEB
      </Button>
      <Button
        borderRadius="2rem"
        size="lg"
        bgColor="blue.600"
        color="#fff"
        fontSize="xl"
        p="2.2rem 1.5rem"
        _hover={{ opacity: "0.5" }}
        leftIcon={<FaGithub />}
        onClick={() => handleOpenNewTab(githubUrl)}>
        Github
      </Button>
    </Flex>
  )
}

export default ProjectDetailSummaryLink
