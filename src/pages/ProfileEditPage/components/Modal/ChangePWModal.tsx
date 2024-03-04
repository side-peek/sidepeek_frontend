import { SubmitHandler, useForm } from "react-hook-form"

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

import {
  CHECK_PASSWORD_VALIDATION_OPTION,
  CURRENT_PASSWORD_VALIDATION_OPTION,
  NEW_PASSWORD_VALIDATION_OPTION,
} from "@pages/ProfileEditPage/constants/validation"

interface FormValues {
  currentPassword: string
  newPassword: string
  checkPassword: string
}
interface ModalProps {
  isOpen: boolean
  onClose: () => void
}
const ChangePWModal = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
  })
  const onValid = () => {
    // TODO: 비밀번호 변경 api 요청
    console.log("1")
    reset()
    onClose()
  }
  const onInvalid = () => {
    console.log("Submit 실패")
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: 기존 비밀번호 api 불러와서 비교 후 다르면 setError하도록 해야함
    const { newPassword, checkPassword } = data
    if (newPassword !== checkPassword) {
      setError("checkPassword", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      })
      onInvalid()
    } else {
      onValid()
    }
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>비밀번호 변경</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            {/* TODO: 기존 비밀번호 api 불러와서 비교 validation */}
            <Flex
              direction="column"
              gap="1.5rem">
              <Box>
                <Flex alignItems="center">
                  <Text fontSize="1.3rem">현재 비밀번호</Text>
                  <Spacer />
                  {errors.currentPassword?.message && (
                    <Text color="red.100">
                      {errors.currentPassword.message.toString()}
                    </Text>
                  )}
                </Flex>

                <CommonInput
                  type="password"
                  size="lg"
                  register={register(
                    "currentPassword",
                    CURRENT_PASSWORD_VALIDATION_OPTION,
                  )}
                  placeholder="현재 비밀번호"
                  inputWidth="100%"
                />
              </Box>

              <Box>
                <Flex alignItems="center">
                  <Text fontSize="1.3rem">새로운 비밀번호</Text>
                  <Spacer />
                  {errors.newPassword?.message && (
                    <Text color="red.100">
                      {errors.newPassword?.message.toString()}
                    </Text>
                  )}
                </Flex>

                <CommonInput
                  type="password"
                  size="lg"
                  register={register(
                    "newPassword",
                    NEW_PASSWORD_VALIDATION_OPTION,
                  )}
                  placeholder="새로운 비밀번호"
                  inputWidth="100%"
                />
              </Box>

              <Box>
                <Flex alignItems="center">
                  <Text fontSize="1.3rem">비밀번호 확인</Text>
                  <Spacer />
                  {errors.checkPassword?.message ? (
                    <Text color="red.100">
                      {errors.checkPassword?.message.toString()}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                </Flex>

                <CommonInput
                  type="password"
                  size="lg"
                  register={register(
                    "checkPassword",
                    CHECK_PASSWORD_VALIDATION_OPTION,
                  )}
                  placeholder="비밀번호 확인"
                  inputWidth="100%"
                />
              </Box>
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
              borderRadius="10px">
              변경
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
export default ChangePWModal
