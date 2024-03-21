import { HStack } from "@chakra-ui/react"

import ProfilePopover from "./components/ProfilePopover/ProfilePopover"

const Menu = () => {
  return (
    <HStack spacing="1.6rem">
      <ProfilePopover />
    </HStack>
  )
}

export default Menu
