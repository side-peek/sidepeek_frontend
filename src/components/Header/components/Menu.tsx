import { FaRegBell } from "react-icons/fa"

import { Avatar, HStack, Icon, IconButton } from "@chakra-ui/react"

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
              <Icon
                as={FaRegBell}
                w="3rem"
                h="3rem"
              />
            }
            bg={"transparent"}
            _before={{
              content: "''",
              position: "absolute",
              top: "5%",
              right: "10%",
              width: "1rem",
              height: "1rem",
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
            size="md"
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
