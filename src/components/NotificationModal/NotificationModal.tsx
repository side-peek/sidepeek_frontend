import { useCallback, useEffect } from "react"

import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

const NotificationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const checkPopupDisplay = useCallback(() => {
    const popupShownTime = localStorage.getItem(
      import.meta.env.VITE_EVENT_POPUP_KEY,
    )
    if (popupShownTime) {
      const now = new Date()
      const shownTime = new Date(popupShownTime)
      if (now < shownTime) {
        // 현재 시간이 저장된 시간보다 이전이면 팝업을 표시하지 않음
        return
      }
    }
    // 그 외의 경우에는 팝업 표시
    onOpen()
  }, [onOpen])

  // '오늘 하루 보지 않기' 버튼 클릭 이벤트 핸들러
  const hidePopupForToday = () => {
    const now = new Date()
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000) // 현재 시간에서 24시간을 더함
    localStorage.setItem(
      import.meta.env.VITE_EVENT_POPUP_KEY,
      tomorrow.toString(),
    ) // 로컬 스토리지에 저장
    onClose()
  }

  useEffect(() => {
    checkPopupDisplay()
  }, [checkPopupDisplay])

  return (
    <>
      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily="SCDream_Bold"
            fontSize="2rem">
            📢 이벤트 참여 기간 변경 안내
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center">
            <Text
              fontFamily="SCDream_Regular"
              fontSize="1.4rem"
              color="gray.500">
              이벤트 기간이 아래와 같이 연장됩니다.
            </Text>
            <Text
              fontFamily="SCDream_Regular"
              fontSize="1.4rem"
              color="gray.500">
              기간 변경으로 혼선을 드려 대단히 죄송합니다.
            </Text>

            <Text
              mt="1.6rem"
              fontFamily="SCDream_Regular"
              fontSize="1.6rem"
              color="red">
              2024년 3월 25일(월) ~ 2024년 4월 7일(일)
            </Text>
          </ModalBody>
          <ModalFooter mt="1.6rem">
            <Checkbox onChange={hidePopupForToday}>
              오늘 하루 보지 않기
            </Checkbox>
            <Spacer />
            <Button
              bg="gray.200"
              p="1.4rem"
              ml={3}
              _hover={{ backgroundColor: "gray.300" }}
              onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NotificationModal
