import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

import { useDeleteProjectMutation } from "@pages/ProjectDetailPage/hooks/mutations/useDeleteProjectMutation"

interface ProjectDeleteCheckModalProps {
  isOpen: boolean
  onClose: () => void
  projectId: string
}

const ProjectDeleteCheckModal = ({
  isOpen,
  onClose,
  projectId,
}: ProjectDeleteCheckModalProps) => {
  const { deleteProjectMutation } = useDeleteProjectMutation()

  const handleDeleteProject = () => {
    onClose()
    deleteProjectMutation(Number(projectId))
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      isCentered>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader fontSize="md">정말로 삭제하시겠습니까?</ModalHeader>
        <ModalCloseButton />
        <Text p="2rem">삭제된 게시물은 복구할 수 없습니다!</Text>
        <ModalFooter>
          <Button
            h="2.5rem"
            fontSize="md"
            color="white"
            bg="blue.100"
            p="1rem"
            _hover={{ opacity: 0.5 }}
            onClick={handleDeleteProject}>
            삭제하기
          </Button>
          <Button
            h="2.5rem"
            fontSize="md"
            color="white"
            bg="blue.100"
            p="1rem"
            ml="1rem"
            _hover={{ opacity: 0.5 }}
            onClick={onClose}>
            취소
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProjectDeleteCheckModal
