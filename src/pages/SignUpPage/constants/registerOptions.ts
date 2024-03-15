import { RegisterOptions } from "react-hook-form"

export const emailOptions: RegisterOptions = {
  required: "이메일을 입력해주세요",
  pattern: {
    value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
    message: "이메일 형식에 맞지 않습니다.",
  },
  max: {
    value: 15,
    message: "이메일은 최대 25자까지 입력 가능합니다.",
  },
  shouldUnregister: true,
}

export const nicknameOptions: RegisterOptions = {
  required: "사용할 닉네임을 입력해주세요.",
  pattern: {
    value: /^[a-zA-Z0-9가-힣]+$/,
    message: "닉네임은 특수문자를 사용할 수 없습니다.",
  },
  maxLength: {
    value: 12,
    message: "닉네임은 최대 12글자까지 가능합니다.",
  },
  minLength: {
    value: 2,
    message: "닉네임은 최소 2글자 이상 입력하여야 합니다.",
  },
  shouldUnregister: true,
}

export const passwordOptions: RegisterOptions = {
  required: "비밀번호를 입력해주세요.",
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
    message:
      "문자, 숫자, 특수 문자를 포함하는 8글자 이상의 비밀번호여야 합니다.",
  },
  minLength: {
    value: 8,
    message: "8글자 이상 입력하여야 합니다.",
  },
}

export const confirmPasswordOptions: RegisterOptions = {
  required: "비밀번호 확인이 필요합니다.",
}
