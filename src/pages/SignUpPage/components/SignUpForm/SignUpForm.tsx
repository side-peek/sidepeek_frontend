import { FormProvider } from "react-hook-form"

import { Flex, Input } from "@chakra-ui/react"

import InputController from "@components/InputController/InputController"

import {
  confirmPasswordOptions,
  emailOptions,
  nicknameOptions,
  passwordOptions,
} from "@pages/SignUpPage/constants/registerOptions"
import { DOUBLE_CHECK_MESSAGE } from "@pages/SignUpPage/constants/toastMessages"
import { useSignUpForm } from "@pages/SignUpPage/hooks/useSignUpForm"

import DoubleCheckButton from "./components/DoubleCheckButton"
import SignUpButton from "./components/SignUpButton"

const SignUpForm = () => {
  const {
    method,
    emailCheck,
    nicknameCheck,
    onSubmit,
    handleDoubleCheck,
    isLoading,
  } = useSignUpForm()

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="stretch">
          {/* 회원가입 입력 양식 */}
          {/* email */}
          <InputController
            fieldName="email"
            label="이메일"
            registerOptions={emailOptions}>
            {(renderProps) => (
              <Flex alignItems="center">
                <Input
                  type="email"
                  {...renderProps}
                />
                <DoubleCheckButton
                  isDuplicated={emailCheck.data?.isDuplicated}
                  isLoading={emailCheck.isPending}
                  onClick={() => handleDoubleCheck("email")}
                  errorMessage={DOUBLE_CHECK_MESSAGE.EMAIL.ERROR}
                  successMessage={DOUBLE_CHECK_MESSAGE.EMAIL.SUCCESS}
                />
              </Flex>
            )}
          </InputController>
          {/* nickname */}
          <InputController
            fieldName="nickname"
            label="닉네임"
            registerOptions={nicknameOptions}>
            {(renderProps) => (
              <Flex alignItems="center">
                <Input
                  type="text"
                  {...renderProps}
                />
                <DoubleCheckButton
                  isDuplicated={nicknameCheck.data?.isDuplicated}
                  isLoading={nicknameCheck.isPending}
                  onClick={() => handleDoubleCheck("nickname")}
                  errorMessage={DOUBLE_CHECK_MESSAGE.NICKNAME.ERROR}
                  successMessage={DOUBLE_CHECK_MESSAGE.NICKNAME.SUCCESS}
                />
              </Flex>
            )}
          </InputController>
          {/* paasword */}
          <InputController
            fieldName="password"
            label="비밀번호"
            registerOptions={passwordOptions}>
            <Input type="password" />
          </InputController>
          {/* double check password */}
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
