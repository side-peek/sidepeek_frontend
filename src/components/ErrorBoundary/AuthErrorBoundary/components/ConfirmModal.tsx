import { Link } from "react-router-dom"

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

import { LogoutError } from "@constants/customError"

interface ConfirmModalProps {
  onClose: () => void
  error: Error
}

const ConfirmModal = ({ onClose, error }: ConfirmModalProps) => {
  return (
    <Modal
      size="xl"
      isCentered
      isOpen={true}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2rem">⚠️ Notification</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{error.message}</Text>
          <Text>
            {error instanceof LogoutError ? "다시 로그인 하시겠습니까?" : ""}
          </Text>
        </ModalBody>
        <ModalFooter gap="0.5rem">
          {error instanceof LogoutError ? (
            <>
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
            </>
          ) : (
            <Button
              colorScheme="blue"
              onClick={onClose}>
              확인
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
