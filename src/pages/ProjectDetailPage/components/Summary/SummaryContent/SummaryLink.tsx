import { FaGithub } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

import { Flex } from "@chakra-ui/react"

import SummaryLinkButton from "./SummaryLinkButton"

interface SummaryLinkProps {
  deployUrl: string
  githubUrl: string
}

const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer")
}

const SummaryLink = ({ deployUrl, githubUrl }: SummaryLinkProps) => {
  return (
    <Flex gap="2rem">
      {deployUrl && (
        <SummaryLinkButton
          linkName="WEB"
          leftIcon={<TbWorld />}
          bgColor="blue.100"
          onClick={() => handleOpenNewTab(deployUrl)}
        />
      )}
      {githubUrl && (
        <SummaryLinkButton
          leftIcon={<FaGithub />}
          bgColor="blue.300"
          linkName="Github"
          onClick={() => handleOpenNewTab(githubUrl)}
        />
      )}
    </Flex>
  )
}

export default SummaryLink
