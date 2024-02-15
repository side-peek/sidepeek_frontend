import { ReactNode } from "react"

import {
  Divider,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react"

interface NotificationPopoverProps {
  NotificationIconButton: ReactNode
}

const NotificationPopover = ({
  NotificationIconButton,
}: NotificationPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>{NotificationIconButton}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading size="md">알림</Heading>
        </PopoverHeader>
        <Divider />
        <PopoverBody>이쪽에 알림 목록을 넣을 예정입니다</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NotificationPopover
