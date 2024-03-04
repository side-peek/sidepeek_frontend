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

import CommonInput from "@components/Input/CommonInput"

import {
  NICKNAME_NOSPACE_ERROR,
  NICKNAME_VALIDATION_OPTION,
} from "@pages/ProfileEditPage/constants/validation"
import { ProfileInfo } from "@pages/ProfileEditPage/types/types"

interface FormValues {
  newNickname: string
}
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
  } = useForm<FormValues>({ mode: "onSubmit" })

  const onValid = (data: FormValues) => {
    const { newNickname } = data
    console.log("1")
    // TODO: 낙관적 업데이트 수행 예정. api 요청으로 닉네임 변경해줌
    setProfileInfo((profileInfo) => ({ ...profileInfo, nickname: newNickname }))
    reset()
    onClose()
  }

  const onInvalid = () => {
    console.log("Submit 실패")
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: api 요청 후 데이터 가공을 통해 새로운 닉네임이 이미 존재하는 닉네임인지 판단하고 분기
    const { newNickname } = data
    if (
      newNickname.split("").length !== newNickname.split(" ").join("").length
    ) {
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
              {errors.newNickname?.message && (
                <Text color="red.100">
                  {errors.newNickname.message.toString()}
                </Text>
              )}
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

export default ChangeNicknameModal
