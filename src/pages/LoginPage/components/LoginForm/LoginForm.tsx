import { SubmitHandler, useForm } from "react-hook-form"

import { Flex, FormControl, Input } from "@chakra-ui/react"

import LoginButton from "./components/LoginButton"
import LoginFormLabel from "./components/LoginFormLabel"

type formType = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>()

  const onSubmit: SubmitHandler<formType> = (values) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        gap="1.6rem"
        justifyContent="center"
        alignItems="stretch"
        padding="2rem">
        {/* 로그인 입력 양식 */}
        {/* email */}
        <FormControl isInvalid={Boolean(errors.email)}>
          <LoginFormLabel error={errors.email}>이메일</LoginFormLabel>
          <Input
            type="email"
            height="5rem"
            fontSize="2rem"
            {...register("email", { required: "이메일을 입력해주세요" })}
          />
        </FormControl>
        {/* paasword */}
        <FormControl isInvalid={Boolean(errors.password)}>
          <LoginFormLabel error={errors.password}>비밀번호</LoginFormLabel>
          <Input
            type="password"
            height="5rem"
            fontSize="2rem"
            {...register("password", { required: "비밀번호를 입력해주세요" })}
          />
        </FormControl>
        <LoginButton />
      </Flex>
    </form>
  )
}

export default LoginForm
