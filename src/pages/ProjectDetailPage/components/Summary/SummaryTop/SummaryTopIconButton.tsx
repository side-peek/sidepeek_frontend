import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"

interface SummaryTopIconButtonProps extends IconButtonProps {
  count?: number
}
const SummaryTopIconButton = ({
  count,
  ...props
}: SummaryTopIconButtonProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor="pointer"
      _hover={{ opacity: "0.5" }}>
      <IconButton {...props} />
      <Text fontSize={isLargerThan1200 ? "xl" : "md"}>{count}</Text>
    </Flex>
  )
}
export default SummaryTopIconButton
