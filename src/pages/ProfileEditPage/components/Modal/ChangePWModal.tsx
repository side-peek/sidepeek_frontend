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
  useMediaQuery,
} from "@chakra-ui/react"

import { ErrorMessage } from "@components/ErrorMessage/ErrorMessage"
import CommonInput from "@components/Input/CommonInput"

import {
  CHECK_PASSWORD_VALIDATION_OPTION,
  CURRENT_PASSWORD_VALIDATION_OPTION,
  NEW_PASSWORD_VALIDATION_OPTION,
  PASSWORD_MISMATCH_ERROR,
} from "@pages/ProfileEditPage/constants/validation"
import usePutUserPassword from "@pages/ProfileEditPage/hooks/mutation/usePutUserPassword"
import { PasswordFormValues } from "@pages/ProfileEditPage/types/types"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  userId: number
}
const ChangePWModal = ({ isOpen, onClose, userId }: ModalProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormValues>()
  const { putUserPasswordMutation } = usePutUserPassword()

  const onValid = (data: PasswordFormValues) => {
    const passwordChange = {
      originalPassword: data.currentPassword,
      password: data.newPassword,
    }
    putUserPasswordMutation.mutate({
      userId: userId,
      passwordChange: passwordChange,
    })
    reset()
    onClose()
  }
  const onInvalid = () => {
    alert("Submit 실패")
  }

  const onSubmit: SubmitHandler<PasswordFormValues> = (data) => {
    const { newPassword, checkPassword } = data
    if (newPassword !== checkPassword) {
      setError("checkPassword", PASSWORD_MISMATCH_ERROR)
      onInvalid()
    } else {
      onValid(data)
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
      <ModalContent marginTop={isLargerThan500 ? "15rem" : "50%"}>
        <ModalHeader>비밀번호 변경</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex
              direction="column"
              gap="1.5rem">
              <Box>
                <Flex alignItems="center">
                  <Text fontSize="1.3rem">현재 비밀번호</Text>
                  <Spacer />
                  <ErrorMessage
                    errors={errors}
                    name="currentPassword"
                    render={({ message }) => (
                      <Text color="red.100">{message}</Text>
                    )}
                  />
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
                  <ErrorMessage
                    errors={errors}
                    name="newPassword"
                    render={({ message }) => (
                      <Text color="red.100">{message}</Text>
                    )}
                  />
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
                  <ErrorMessage
                    errors={errors}
                    name="checkPassword"
                    render={({ message }) => (
                      <Text color="red.100">{message}</Text>
                    )}
                  />
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
              color="default"
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
