import { Text, TextProps } from "@chakra-ui/react"

interface AvatarCardContentProps extends TextProps {
  text: string
}

const AvatarCardContent = ({ text, ...props }: AvatarCardContentProps) => {
  return (
    <Text
      fontSize="md"
      {...props}>
      {text}
    </Text>
  )
}

export default AvatarCardContent
