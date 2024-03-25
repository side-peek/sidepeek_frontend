import {
  Button,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

interface DeleteCheckModalProps {
  isOpen: boolean
  onClose: () => void
  projectId?: string
  onClick: () => void
}

const DeleteCheckModalStyles = {
  h: "2.5rem",
  fontSize: "lg",
  color: "white",
  bg: "blue.100",
  p: "1.5rem",
  _hover: { opacity: "0.5" },
}

const DeleteCheckModal = ({
  isOpen,
  onClose,
  onClick,
}: DeleteCheckModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader fontSize="xl">정말로 삭제하시겠습니까?</ModalHeader>
        <ModalCloseButton />
        <Text
          p="4rem 2rem"
          fontSize="lg">
          삭제된 게시물은 복구할 수 없습니다!
        </Text>
        <ModalFooter>
          <HStack>
            <Button
              onClick={onClick}
              {...DeleteCheckModalStyles}>
              삭제하기
            </Button>
            <Button
              onClick={onClose}
              {...DeleteCheckModalStyles}>
              취소
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteCheckModal
