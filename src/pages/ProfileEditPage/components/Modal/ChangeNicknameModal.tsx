import { SubmitHandler, useForm } from "react-hook-form"

import {
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
  NICKNAME_NOSPACE_ERROR,
  NICKNAME_VALIDATION_OPTION,
  RegEx,
} from "@pages/ProfileEditPage/constants/validation"
import {
  NicknameFormValues,
  ProfileInfo,
} from "@pages/ProfileEditPage/types/types"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  setProfileInfo: React.Dispatch<React.SetStateAction<ProfileInfo>>
}

const ChangeNicknameModal = ({
  isOpen,
  onClose,
  setProfileInfo,
}: ModalProps) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<NicknameFormValues>()

  const onValid = (data: NicknameFormValues) => {
    const { newNickname } = data
    setProfileInfo((profileInfo) => ({ ...profileInfo, nickname: newNickname }))
    reset()
    onClose()
  }

  const onInvalid = () => {
    alert("submit 실패")
  }

  const onSubmit: SubmitHandler<NicknameFormValues> = (data) => {
    const { newNickname } = data
    if (RegEx.CHECK_SPACE.test(newNickname)) {
      setError("newNickname", NICKNAME_NOSPACE_ERROR)
      onInvalid()
    } else {
      onValid(data)
    }
  }
  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent marginTop={isLargerThan500 ? "15rem" : "50%"}>
        <ModalHeader>닉네임 변경</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex alignItems="center">
              <Text fontSize="1.3rem">새로운 닉네임</Text>
              <Spacer />
              <ErrorMessage
                errors={errors}
                name="newNickname"
                render={({ message }) => <Text color="red.100">{message}</Text>}
              />
            </Flex>
            <CommonInput
              size="lg"
              register={register("newNickname", NICKNAME_VALIDATION_OPTION)}
              inputWidth="100%"
            />
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

export default ChangeNicknameModal
