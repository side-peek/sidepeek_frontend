import { BellIcon } from "@chakra-ui/icons"
import { Avatar, HStack, IconButton } from "@chakra-ui/react"

import NotificationPopover from "./NotificationPopover"
import ProfilePopover from "./ProfilePopover"

const Menu = () => {
  return (
    <HStack spacing="1.6rem">
      <NotificationPopover
        NotificationIconButton={
          <IconButton
            aria-label="notification popover"
            icon={
              <BellIcon
                w={6}
                h={6}
              />
            }
            bg={"transparent"}
            _before={{
              content: "''",
              position: "absolute",
              top: "25%",
              right: "25%",
              width: "0.5rem",
              height: "0.5rem",
              bg: "red",
              borderRadius: "full",
            }}
          />
        }
      />
      <ProfilePopover
        ProfileButton={
          <Avatar
            as="button"
            size="sm"
            aria-label="profile popover"
            transition="all 0.2s"
            _hover={{ filter: "brightness(90%)" }}
          />
        }
      />
    </HStack>
  )
}

export default Menu
