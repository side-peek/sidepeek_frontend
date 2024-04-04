import { Avatar, Button, forwardRef } from "@chakra-ui/react"
import { useUserInfoData } from "@services/caches/useUserInfoData"

const ProfileButton = forwardRef((props, ref) => {
  const userInfo = useUserInfoData()
  return (
    <Avatar
      ref={ref}
      as={Button}
      src={userInfo?.profileImageUrl ?? undefined}
      size="lg"
      name={userInfo?.nickname}
      aria-label="profile popover"
      transition="all 0.2s"
      _hover={{ filter: "brightness(90%)" }}
      {...props}
    />
  )
})

ProfileButton.displayName = "ProfileButton"

export default ProfileButton
