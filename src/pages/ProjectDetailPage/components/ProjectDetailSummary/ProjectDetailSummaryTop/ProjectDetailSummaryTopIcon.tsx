import { IconType } from "react-icons/lib"

import { Flex, Icon, IconProps, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTopIconProps extends IconProps {
  count: number
  icon: IconType
}

const ProjectDetailSummaryTopIcon = ({
  count,
  icon,
  ...props
}: ProjectDetailSummaryTopIconProps) => {
  return (
    <Flex
      gap="0.7rem"
      alignItems="center">
      <Icon
        background="none"
        _hover={{ background: "none" }}
        as={icon}
        fontSize="2.7rem"
        {...props}
      />
      <Text fontSize="xl">{count}</Text>
    </Flex>
  )
}

export default ProjectDetailSummaryTopIcon
