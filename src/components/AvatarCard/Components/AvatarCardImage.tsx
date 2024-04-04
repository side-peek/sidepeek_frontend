import { ReactNode } from "react"

import { Avatar, AvatarProps } from "@chakra-ui/react"

interface AvatarCardImageProps extends AvatarProps {
  children?: ReactNode
}

const AvatarCardImage = ({ children, ...props }: AvatarCardImageProps) => {
  return (
    <Avatar
      size="xl"
      name=""
      {...props}>
      {children}
    </Avatar>
  )
}

export default AvatarCardImage
