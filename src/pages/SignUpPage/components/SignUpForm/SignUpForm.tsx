import { FormProvider } from "react-hook-form"

import { Flex, Input } from "@chakra-ui/react"

import InputController from "@components/InputController/InputController"

import {
  confirmPasswordOptions,
  emailOptions,
  nicknameOptions,
  passwordOptions,
} from "@pages/SignUpPage/constants/registerOptions"
import { useSignUpForm } from "@pages/SignUpPage/hooks/useSignUpForm"

import InputWithDoubleCheck from "./components/InputWithDoubleCheck"
import SignUpButton from "./components/SignUpButton"

const SignUpForm = () => {
  const { method, onSubmit, isLoading } = useSignUpForm()

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
            {(renderProps) => (
              <InputWithDoubleCheck
                renderProps={renderProps}
                fieldName="email"
              />
            )}
          </InputController>
          <InputController
            fieldName="nickname"
            label="닉네임"
            registerOptions={nicknameOptions}>
            {(renderProps) => (
              <InputWithDoubleCheck
                renderProps={renderProps}
                fieldName="nickname"
              />
            )}
          </InputController>
          <InputController
            fieldName="password"
            label="비밀번호"
            registerOptions={passwordOptions}>
            <Input type="password" />
          </InputController>
          <InputController
            fieldName="confirmPassword"
            label="비밀번호 확인"
            registerOptions={confirmPasswordOptions}>
            <Input type="password" />
          </InputController>
          <SignUpButton isLoading={isLoading} />
        </Flex>
      </form>
    </FormProvider>
  )
}

export default SignUpForm
