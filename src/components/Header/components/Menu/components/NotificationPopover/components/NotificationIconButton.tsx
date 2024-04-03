import { forwardRef } from "react"

import { Icon, IconButton } from "@chakra-ui/react"
import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell"

const NotificationIconButton = forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <IconButton
      ref={ref}
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
      {...props}
    />
  )
})

NotificationIconButton.displayName = "NotificationIconButton"

export default NotificationIconButton
