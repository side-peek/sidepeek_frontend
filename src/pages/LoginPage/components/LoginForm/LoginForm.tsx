import { FormProvider } from "react-hook-form"

import { Flex, Input } from "@chakra-ui/react"

import InputController from "@components/InputController/InputController"

import {
  emailOptions,
  passwordOptions,
} from "@pages/LoginPage/constants/registerOptions"
import useLoginForm from "@pages/LoginPage/hooks/useLoginForm"

import LoginButton from "./components/LoginButton"

const LoginForm = () => {
  const { method, onSubmit, isPending } = useLoginForm()

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="stretch">
          <InputController
            fieldName="email"
            label="이메일"
            registerOptions={emailOptions}>
            <Input />
          </InputController>
          <InputController
            fieldName="password"
            label="비밀번호"
            registerOptions={passwordOptions}>
            <Input type="password" />
          </InputController>
          <LoginButton isLoading={isPending} />
        </Flex>
      </form>
    </FormProvider>
  )
}

export default LoginForm
