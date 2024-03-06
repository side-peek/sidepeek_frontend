import { Flex, IconButton, IconButtonProps, Text } from "@chakra-ui/react"

interface SummaryTopIconButtonProps extends IconButtonProps {
  count?: number
}

const SummaryTopIconButton = ({
  count,
  ...props
}: SummaryTopIconButtonProps) => {
  return (
    <Flex
      gap="0.7rem"
      alignItems="center"
      cursor="pointer"
      _hover={{ opacity: "0.5" }}>
      <IconButton {...props} />
      <Text fontSize="xl">{count}</Text>
    </Flex>
  )
}

export default SummaryTopIconButton
