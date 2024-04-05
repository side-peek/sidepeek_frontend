import { useNavigate } from "react-router-dom"

import { Button, Icon, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { IoLogOutOutline } from "@react-icons/all-files/io5/IoLogOutOutline"

import { LOGOUT_MESSAGE } from "@components/Header/constants/messages"

import useLogout from "@hooks/useLogout"

import { toastOptions } from "@pages/SignUpPage/constants/toastOptions"

import LogoutModal from "./LogoutModal"

interface LogoutButtonProps {
  onClose: () => void
}

const LogoutButton = ({ onClose }: LogoutButtonProps) => {
  const toast = useToast(toastOptions)
  const navigate = useNavigate()
  const logout = useLogout()

  const { isOpen, onOpen, onClose: onLogoutModalClose } = useDisclosure()

  const handleLogout = () => {
    onLogoutModalClose()

    onClose()

    logout()

    navigate("/login")

    toast({
      status: "success",
      title: LOGOUT_MESSAGE.SUCCESS,
    })
  }

  return (
    <>
      <Button
        rightIcon={
          <Icon
            as={IoLogOutOutline}
            w={8}
            h={8}
          />
        }
        onClick={onOpen}>
        <Text
          flexGrow="1"
          textAlign="left">
          로그아웃
        </Text>
      </Button>
      {isOpen && (
        <LogoutModal
          onLogout={handleLogout}
          onClose={onLogoutModalClose}
        />
      )}
    </>
  )
}

export default LogoutButton
