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

const AlertModal = () => {
  return (
    <Modal
      size="xl"
      isCentered
      onClose={() => {}}
      isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2rem">⚠️ Login Failed</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>로그인에 실패하였습니다.</Text>
          <Text>다시 시도해주세요.</Text>
        </ModalBody>
        <ModalFooter gap="0.5rem">
          <Button
            as={Link}
            to="/login"
            colorScheme="blue">
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AlertModal
