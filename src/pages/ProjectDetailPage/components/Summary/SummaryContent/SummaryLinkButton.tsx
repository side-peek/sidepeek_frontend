import { Button, ButtonProps } from "@chakra-ui/react"

interface SummaryLinkButtonProps extends ButtonProps {
  linkName: string
}

const SummaryLinkButton = ({ linkName, ...props }: SummaryLinkButtonProps) => {
  return (
    <Button
      borderRadius="2rem"
      size="lg"
      color="white"
      fontSize="xl"
      p="2.2rem 1.5rem"
      _hover={{ opacity: "0.5" }}
      {...props}>
      {linkName}
    </Button>
  )
}

export default SummaryLinkButton
