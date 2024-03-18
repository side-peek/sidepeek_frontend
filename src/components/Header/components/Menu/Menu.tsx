import { HStack } from "@chakra-ui/react"

import ProfilePopover from "./components/ProfilePopover/ProfilePopover"

const Menu = () => {
  return (
    <HStack spacing="1.6rem">
      {/* TODO: 알림 기능 구현 */}
      {/* <NotificationPopover /> */}
      <ProfilePopover />
    </HStack>
  )
}

export default Menu
