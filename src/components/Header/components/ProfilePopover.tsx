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

interface IProfilePopover {
  ProfileButton: ReactNode
}

const ProfilePopover = ({ ProfileButton }: IProfilePopover) => {
  return (
    <Popover>
      <PopoverTrigger>{ProfileButton}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading size="md">프로필</Heading>
        </PopoverHeader>
        <Divider />
        <PopoverBody>이쪽에 프로필 팝오버 목록을 넣을 예정입니다</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ProfilePopover
