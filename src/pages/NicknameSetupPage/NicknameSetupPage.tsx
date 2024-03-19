import { FormProvider } from "react-hook-form"

import { Center, Flex } from "@chakra-ui/react"

import LogoLink from "@components/LogoLink/LogoLink"

import AlertModal from "./components/AlertModal"
import NicknameInput from "./components/NicknameInput"
import SubmitButton from "./components/SubmitButton"
import { useNicknameSetup } from "./hooks/useNicknameSetup"

const NicknameSetupPage = () => {
  const { method, onSubmit, isError, isNicknameSet, onLoginSuccess } =
    useNicknameSetup()

  if (isError) {
    return <AlertModal />
  }

  if (isNicknameSet) {
    onLoginSuccess()
  }

  return (
    <Center height="100vh">
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <Flex
            flexDir="column"
            gap="2rem">
            <Center>
              <LogoLink logoHeight="6rem" />
            </Center>
            <NicknameInput />
            <SubmitButton />
          </Flex>
        </form>
      </FormProvider>
    </Center>
  )
}

export default NicknameSetupPage
