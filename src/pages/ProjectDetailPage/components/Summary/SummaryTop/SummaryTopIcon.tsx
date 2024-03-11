import { IconType } from "react-icons/lib"

import { Flex, Icon, IconProps, Text } from "@chakra-ui/react"

interface SummaryTopIconProps extends IconProps {
  count: number
  icon: IconType
}

const SummaryTopIcon = ({ count, icon, ...props }: SummaryTopIconProps) => {
  return (
    <Flex
      gap="0.7rem"
      alignItems="center">
      <Icon
        as={icon}
        fontSize="2.7rem"
        {...props}
      />
      <Text fontSize="xl">{count}</Text>
    </Flex>
  )
}

export default SummaryTopIcon
