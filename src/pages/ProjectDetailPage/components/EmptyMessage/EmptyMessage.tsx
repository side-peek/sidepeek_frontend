import { Text } from "@chakra-ui/react"

import { EMPTY_MESSAGE, EmptyMessaggeType } from "../../constants/emptyMessage"

interface EmptyMessageProps {
  type: EmptyMessaggeType
}
const EmptyMessage = ({ type }: EmptyMessageProps) => {
  return (
    <Text
      color="grey.500"
      fontSize="lg">
      {EMPTY_MESSAGE[type]}
    </Text>
  )
}

export default EmptyMessage
