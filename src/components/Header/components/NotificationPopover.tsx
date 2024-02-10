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
import { ReactNode } from "react"

interface INotificationPopover {
  NotificationIconButton: ReactNode
}

const NotificationPopover = ({
  NotificationIconButton,
}: INotificationPopover) => {
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
