import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import { Flex, Input } from "@chakra-ui/react"

import InputController from "@components/InputController/InputController"

import {
  emailOptions,
  passwordOptions,
} from "@pages/LoginPage/constants/registerOptions"
import { LoginFormType } from "@pages/LoginPage/types/LoginFormType"

import LoginButton from "./components/LoginButton"

const LoginForm = () => {
  const method = useForm<LoginFormType>()

  const onSubmit: SubmitHandler<LoginFormType> = (values) => {
    console.log(values)
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="stretch">
          {/* 로그인 입력 양식 */}
          {/* email */}
          <InputController
            fieldName="email"
            label="이메일"
            registerOptions={emailOptions}>
            <Input type="email" />
          </InputController>
          {/* paasword */}
          <InputController
            fieldName="password"
            label="비밀번호"
            registerOptions={passwordOptions}>
            <Input type="password" />
          </InputController>
          <LoginButton />
        </Flex>
      </form>
    </FormProvider>
  )
}

export default LoginForm
