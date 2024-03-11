import { HStack, Text } from "@chakra-ui/react"
import { CommentUser } from "api-models"

import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

interface CommentTitleProps {
  user: CommentUser
  createdAt: string
}

const CommentTitle = ({ user, createdAt }: CommentTitleProps) => {
  return (
    <HStack
      gap="1rem"
      align="center">
      <Text
        fontFamily="SCDream_Bold"
        fontSize="xl">
        {user ? user.nickname : "익명"}
      </Text>
      <Text
        color="grey.500"
        fontSize="md">
        {dateToTimeago(createdAt)}
      </Text>
    </HStack>
  )
}

export default CommentTitle
