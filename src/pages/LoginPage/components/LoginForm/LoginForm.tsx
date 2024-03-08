import { SubmitHandler, useForm } from "react-hook-form"

import { Flex } from "@chakra-ui/react"

import InputController from "@components/InputController/InputController"

import LoginButton from "./components/LoginButton"

type FormType = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit: SubmitHandler<FormType> = (values) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        gap="1.6rem"
        justifyContent="center"
        alignItems="stretch">
        {/* 로그인 입력 양식 */}
        {/* email */}
        <InputController
          type="email"
          label="이메일"
          isInvalid={Boolean(errors.email)}
          errorMessage={errors.email?.message}
          registerOptions={register("email", {
            required: "이메일을 입력해주세요",
          })}
        />
        {/* paasword */}
        <InputController
          type="password"
          label="비밀번호"
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password?.message}
          registerOptions={register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
        <LoginButton />
      </Flex>
    </form>
  )
}

export default LoginForm
