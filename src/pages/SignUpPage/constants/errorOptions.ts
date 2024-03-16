import { ErrorOption } from "react-hook-form"

import { SignUpFormValues } from "../types/SignUpFormValues"

interface DoubleCheckErrors
  extends Pick<
    Record<keyof SignUpFormValues, ErrorOption>,
    "email" | "nickname"
  > {}

export const duplicatedErrors: DoubleCheckErrors = {
  email: {
    type: "validate",
    message: "이미 존재하는 이메일입니다.",
  },
  nickname: {
    type: "validate",
    message: "이미 존재하는 닉네임입니다.",
  },
}

export const requiredDoubleCheckErrors: DoubleCheckErrors = {
  email: {
    type: "requried",
    message: "이메일 중복 확인이 필요합니다.",
  },
  nickname: {
    type: "requried",
    message: "닉네임 중북 확인이 필요합니다.",
  },
}

export const differentPasswordError: ErrorOption = {
  type: "validate",
  message: "비밀번호가 일치하지 않습니다.",
}
