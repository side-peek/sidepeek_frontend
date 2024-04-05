import { Text } from "@chakra-ui/react"

import { EMPTY_MESSAGE, EmptyMessaggeType } from "../../constants/emptyMessage"

interface EmptyMessageProps {
  type: EmptyMessaggeType
}
const EmptyMessage = ({ type }: EmptyMessageProps) => {
  return (
    <Text
      color="blue.100"
      fontSize="lg">
      {EMPTY_MESSAGE[type]}
    </Text>
  )
}

export default EmptyMessage
