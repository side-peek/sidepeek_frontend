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
  const LINK_LIST = [
    {
      icons: <TbWorld />,
      onClick: () => handleOpenNewTab(deployUrl),
      bgColor: "blue.100",
      linkName: "WEB",
    },
    {
      icons: <FaGithub />,
      onClick: () => handleOpenNewTab(githubUrl),
      bgColor: "blue.600",
      linkName: "Github",
    },
  ]

  return (
    <Flex gap="2rem">
      {LINK_LIST.map((link) => (
        <ProjectDetailSummaryLinkButton
          key={link.linkName}
          leftIcon={link.icons}
          bgColor={link.bgColor}
          linkName={link.linkName}
          onClick={link.onClick}
        />
      ))}
    </Flex>
  )
}

export default ProjectDetailSummaryLink
