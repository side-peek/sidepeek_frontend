import { Link } from "react-router-dom"

import { Button, ButtonProps, Text } from "@chakra-ui/react"

const ProfileEditButton = (props: ButtonProps) => {
  return (
    <Button
      as={Link}
      to="/profile/edit"
      {...props}>
      <Text
        flexGrow="1"
        textAlign="left">
        프로필 수정
      </Text>
    </Button>
  )
}

export default ProfileEditButton
