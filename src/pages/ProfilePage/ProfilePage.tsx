import { Fade } from "@chakra-ui/react"

import ProfileController from "./components/Profile/Profile.controller"

const ProfilePage = () => {
  return (
    <Fade in={true}>
      <ProfileController />
    </Fade>
  )
}

export default ProfilePage
