import { Link } from "react-router-dom"

import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

interface LogoutModalProps {
  onClose: () => void
  onLogout: () => void
}

const LogoutModal = ({ onClose, onLogout }: LogoutModalProps) => {
  return (
    <Modal
      size="xl"
      isCentered
      isOpen={true}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2rem">로그아웃 하시겠습니까?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter gap="0.5rem">
          <Button
            colorScheme="gray"
            onClick={onClose}>
            취소
          </Button>
          <Button
            as={Link}
            to="/login"
            colorScheme="blue"
            onClick={onLogout}>
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LogoutModal
