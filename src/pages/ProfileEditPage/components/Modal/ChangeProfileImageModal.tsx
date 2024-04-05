import { useRef } from "react"

import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { GoPlus } from "@react-icons/all-files/go/GoPlus"

import useFileUpload from "@pages/ProfileEditPage/hooks/useFileUpload"
import { ProfileInfo } from "@pages/ProfileEditPage/types/types"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}

const ChangeProfileImageModal = ({
  isOpen,
  onClose,
  setProfileInfo,
}: ModalProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  const inputRef = useRef<HTMLInputElement>(null)

  const {
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileDrop,
    isDragging,
    isSubmitting,
    fileBase64,
    responsedFileUrl,
  } = useFileUpload()

  const handleClose = () => {
    onClose()
  }
  const handleSubmit = () => {
    setProfileInfo((profileInfo: ProfileInfo) => ({
      ...profileInfo,
      profileImageUrl: responsedFileUrl,
    }))
    onClose()
  }

  const handleFileChoose = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }

  return (
    <Modal
      size="2xl"
      isOpen={isOpen}
      onClose={handleClose}>
      <ModalOverlay />
      <ModalContent margin={isLargerThan500 ? "15rem 0 0 0" : "auto auto"}>
        <ModalHeader>프로필 이미지 변경</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            position="relative"
            w="100%"
            h="50rem"
            border="1px solid"
            borderColor={isDragging ? "yellow.100" : "grey.300"}
            justifyContent="center"
            alignItems="center"
            onDrop={handleFileDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}>
            {fileBase64 ? (
              <>
                <Image
                  src={fileBase64}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  bg="black.100"
                  opacity={0.5}
                  w="100%"
                  h="100%"></Box>
                <Box
                  position="absolute"
                  borderRadius="50%"
                  w="100%"
                  style={{
                    clipPath: "circle(19rem at center)",
                  }}>
                  <Box
                    w="100%"
                    h="50rem">
                    <Image
                      src={fileBase64}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </Box>
                </Box>
              </>
            ) : (
              <Text>
                추가 버튼을 누르거나 파일을 드롭하여 이미지를 업로드 하세요
              </Text>
            )}

            <Input
              ref={inputRef}
              type="file"
              display="none"
              onChange={handleFileChange}></Input>
            <Flex
              position="absolute"
              right="1rem"
              bottom="1rem"
              w="4rem"
              h="4rem"
              bg="grey.300"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={handleFileChoose}>
              <Icon
                as={GoPlus}
                w="2.5rem"
                h="2.5rem"
                color="default"
              />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            isLoading={isSubmitting}
            type="submit"
            w="6rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="default"
            bg="blue.100"
            borderRadius="10px"
            _hover={{ bg: "blue.100" }}
            onClick={handleSubmit}>
            변경
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ChangeProfileImageModal
