import { useRef, useState } from "react"
import { GoPlus } from "react-icons/go"

import { postFile } from "@api/file/postFile"
import {
  Box,
  Button,
  Flex,
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

import { useMutation } from "@tanstack/react-query"

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

  const { convertFileToBase64 } = useFileUpload()

  const inputRef = useRef<HTMLInputElement>(null)

  const [fileBase64, setFileBase64] = useState<string | undefined>()
  const [isDragging, setIsDragging] = useState(false)
  const [responsedFileUrl, setResponsedFileUrl] = useState("")

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

  const uploadFileMutation = useMutation({
    mutationFn: async (file: File) => await postFile(file),
    onSuccess(data) {
      setResponsedFileUrl(data?.fileUrl)
      console.log(data)
    },
  })

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0]
      const base64 = await convertFileToBase64(selectedFile)
      setFileBase64(base64)
      console.log(selectedFile)

      uploadFileMutation.mutate(selectedFile)
    }
  }

  const handleFileChoose = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()

    if (event?.dataTransfer?.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleFileDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const files = event?.dataTransfer?.files

    if (files && files?.length > 0) {
      const selectedFile = files[0]

      const base64 = await convertFileToBase64(selectedFile)
      setFileBase64(base64)
      //   setProfileInfo((profileInfo: ProfileInfo) => ({
      //     ...profileInfo,
      //     profileImageUrl: base64,
      //   }))
      uploadFileMutation.mutate(selectedFile)
    }
    setIsDragging(false)
  }

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={handleClose}>
      <ModalOverlay />
      <ModalContent marginTop={isLargerThan500 ? "15rem" : "50%"}>
        <ModalHeader>프로필 이미지 변경</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            position="relative"
            w="100%"
            h="40rem"
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
                  style={{
                    clipPath: "circle(16rem at center)",
                  }}>
                  <Box
                    w="100%"
                    h="40rem">
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
              <GoPlus
                color="white"
                size="2.5rem"
              />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            w="6rem"
            h="3.5rem"
            fontSize="1.3rem"
            color="white"
            bg="blue.100"
            borderRadius="10px"
            onClick={handleSubmit}>
            변경
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ChangeProfileImageModal
