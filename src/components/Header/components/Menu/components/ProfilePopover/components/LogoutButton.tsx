import { IoLogOutOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

import { Button, Icon, Text, useToast } from "@chakra-ui/react"

import { LOGOUT_MESSAGE } from "@components/Header/constants/messages"

import useLogout from "@hooks/useLogout"

import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

interface LogoutButtonProps {
  onClose: () => void
}

const LogoutButton = ({ onClose }: LogoutButtonProps) => {
  const toast = useToast(toastOptions)
  const navigate = useNavigate()
  const logout = useLogout()

  const handleLogout = () => {
    const isConfirmed = confirm(LOGOUT_MESSAGE.CONFIRM)

    if (isConfirmed) {
      onClose()

      logout()

      navigate("/login")

      toast({
        status: "success",
        title: LOGOUT_MESSAGE.SUCCESS,
      })
    }
  }

  return (
    <Button
      rightIcon={
        <Icon
          as={IoLogOutOutline}
          w={8}
          h={8}
        />
      }
      onClick={handleLogout}>
      <Text
        flexGrow="1"
        textAlign="left">
        로그아웃
      </Text>
    </Button>
  )
}

export default LogoutButton
