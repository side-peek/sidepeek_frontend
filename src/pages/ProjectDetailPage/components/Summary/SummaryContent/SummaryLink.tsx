import { Button, HStack } from "@chakra-ui/react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { TbWorld } from "@react-icons/all-files/tb/TbWorld"

interface SummaryLinkProps {
  deployUrl: string
  githubUrl: string
}

const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer")
}

const SummaryLinkButtonStyle = {
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.5rem",
  padding: "1.8rem 1.2rem",
  _hover: { opacity: "0.5" },
}

const SummaryLink = ({ deployUrl, githubUrl }: SummaryLinkProps) => {
  return (
    <HStack spacing="2rem">
      {deployUrl && (
        <Button
          leftIcon={<TbWorld />}
          bgColor="blue.100"
          onClick={() => handleOpenNewTab(deployUrl)}
          {...SummaryLinkButtonStyle}>
          {"WEB"}
        </Button>
      )}
      {githubUrl && (
        <Button
          leftIcon={<FaGithub />}
          bgColor="blue.100"
          onClick={() => handleOpenNewTab(githubUrl)}
          {...SummaryLinkButtonStyle}>
          {"Github"}
        </Button>
      )}
    </HStack>
  )
}

export default SummaryLink
