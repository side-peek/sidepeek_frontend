import { ReactNode } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

import AvatarCardContent from "./Components/AvatarCardContent"
import AvatarCardHeader from "./Components/AvatarCardHeader"
import AvatarCardImage from "./Components/AvatarCardImage"

interface AvatarCardMainProps extends BoxProps {
  children: ReactNode
}

const AvatarCardMain = ({ children, ...props }: AvatarCardMainProps) => {
  return (
    <Box
      display="inline-flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      padding="1rem"
      border="1px solid"
      borderColor="grey.300"
      borderRadius="1rem"
      {...props}>
      {children}
    </Box>
  )
}

const AvatarCard = Object.assign(AvatarCardMain, {
  Image: AvatarCardImage,
  Header: AvatarCardHeader,
  Content: AvatarCardContent,
})
export default AvatarCard
