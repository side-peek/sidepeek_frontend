import { Text, TextProps } from "@chakra-ui/react"

interface AvatarCardHeaderProps extends TextProps {
  text: string
}

const AvatarCardHeader = ({ text, ...props }: AvatarCardHeaderProps) => {
  return (
    <Text
      as="b"
      fontSize="lg"
      {...props}>
      {text}
    </Text>
  )
}

export default AvatarCardHeader
