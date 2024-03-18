import { Button, ButtonProps, useMediaQuery } from "@chakra-ui/react"

interface SummaryLinkButtonProps extends ButtonProps {
  linkName: string
}

const SummaryLinkButton = ({ linkName, ...props }: SummaryLinkButtonProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Button
      borderRadius="2rem"
      size="lg"
      color="white"
      fontSize={isLargerThan1200 ? "xl" : "md"}
      p={isLargerThan1200 ? "2.2rem 1.5rem" : "2rem 1.3rem"}
      _hover={{ opacity: "0.5" }}
      {...props}>
      {linkName}
    </Button>
  )
}
export default SummaryLinkButton
