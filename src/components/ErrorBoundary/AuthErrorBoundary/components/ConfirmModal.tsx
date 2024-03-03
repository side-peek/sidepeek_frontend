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

interface ConfirmModalProps {
  onClose: () => void
}

const ConfirmModal = ({ onClose }: ConfirmModalProps) => {
  return (
    <Modal
      size="xl"
      isCentered
      isOpen={true}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2rem">⚠️ 로그인이 필요합니다!</ModalHeader>
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
            onClick={onClose}>
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
