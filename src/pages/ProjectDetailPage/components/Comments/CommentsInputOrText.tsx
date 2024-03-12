import { UseFormRegisterReturn } from "react-hook-form"
import ResizeTextarea from "react-textarea-autosize"

import { Text, Textarea } from "@chakra-ui/react"

interface CommentsInputOrTextProps {
  isEditing: boolean
  register: UseFormRegisterReturn
  content: string
}

const CommentsInputOrText = ({
  isEditing,
  register,
  content,
}: CommentsInputOrTextProps) => {
  return isEditing ? (
    <Textarea
      rows={1}
      w="100%"
      fontSize="lg"
      p="0.2rem"
      as={ResizeTextarea}
      isRequired={false}
      resize="none"
      {...register}
    />
  ) : (
    <Text
      fontSize="lg"
      p="0.2rem">
      {content}
    </Text>
  )
}

export default CommentsInputOrText
