import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  StackDivider,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"

import CreateProjectButton from "./components/CreateProjectButton"
import LogoutButton from "./components/LogoutButton"
import ProfileButton from "./components/ProfileButton"
import ProfileEditButton from "./components/ProfileEditButton"
import ProfileLink from "./components/ProfileLink"

const ProfilePopover = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}>
      <PopoverTrigger>
        <ProfileButton onClick={onToggle} />
      </PopoverTrigger>
      <PopoverContent
        p="0.5rem"
        minWidth="30rem">
        <PopoverArrow />
        <PopoverCloseButton
          size="xl"
          top="5%"
          right="5%"
        />
        <PopoverBody>
          <VStack
            width="100%"
            alignItems="stretch"
            divider={<StackDivider />}>
            <ProfileLink onClose={onClose} />
            <ProfileEditButton onClick={onClose} />
            <CreateProjectButton onClick={onClose} />
            <LogoutButton onClose={onClose} />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ProfilePopover
