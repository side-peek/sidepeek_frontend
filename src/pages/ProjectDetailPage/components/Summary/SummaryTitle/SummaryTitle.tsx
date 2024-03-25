import { Center, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryTitleProps {
  name: string
  subName: string
}

const SummaryTitle = ({ name, subName }: SummaryTitleProps) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return (
    <Center
      flexDirection="column"
      gap="1rem">
      <Text
        fontFamily="SCDream_Bold"
        fontSize={isLargerThan768 ? "3xl" : "1.5rem"}>
        {name}
      </Text>
      <Text fontSize={isLargerThan768 ? "3xl" : "1.5rem"}>{subName}</Text>
    </Center>
  )
}
export default SummaryTitle
