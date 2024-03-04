import { FaGithub } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

import { Flex } from "@chakra-ui/react"

import ProjectDetailSummaryLinkButton from "./ProjectDetailSummaryLinkButton"

interface ProjectDetailSummaryLinkProps {
  deployUrl: string
  githubUrl: string
}

const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer")
}

const ProjectDetailSummaryLink = ({
  deployUrl,
  githubUrl,
}: ProjectDetailSummaryLinkProps) => {
  return (
    <Flex gap="2rem">
      <ProjectDetailSummaryLinkButton
        linkName="WEB"
        leftIcon={<TbWorld />}
        bgColor="blue.100"
        onClick={() => handleOpenNewTab(deployUrl)}
      />

      <ProjectDetailSummaryLinkButton
        leftIcon={<FaGithub />}
        bgColor="blue.300"
        linkName="GithUb"
        onClick={() => handleOpenNewTab(githubUrl)}
      />
    </Flex>
  )
}

export default ProjectDetailSummaryLink
