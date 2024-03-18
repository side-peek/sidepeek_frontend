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

import NotificationIconButton from "./components/NotificationIconButton"

const NotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <NotificationIconButton />
      </PopoverTrigger>
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
