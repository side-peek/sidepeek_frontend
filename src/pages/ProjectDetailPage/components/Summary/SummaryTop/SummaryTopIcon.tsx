import { IconType } from "react-icons/lib"

import { Flex, Icon, IconProps, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryTopIconProps extends IconProps {
  count: number
  icon: IconType
}

const SummaryTopIcon = ({ count, icon, ...props }: SummaryTopIconProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Flex
      gap="0.7rem"
      alignItems="center">
      <Icon
        as={icon}
        fontSize={isLargerThan1200 ? "2.7rem" : "2rem"}
        {...props}
      />
      <Text fontSize={isLargerThan1200 ? "xl" : "md"}>{count}</Text>
    </Flex>
  )
}

export default SummaryTopIcon
