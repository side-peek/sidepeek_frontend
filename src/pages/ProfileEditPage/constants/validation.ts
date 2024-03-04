export const NICKNAME_VALIDATION_OPTION = {
  required: "새로운 닉네임을 입력해주세요",
  minLength: {
    value: 2,
    message: "새로운 닉네임은 2자 이상이어야 합니다",
  },
}

export const NICKNAME_NOSPACE_ERROR = {
  type: "nickname-space",
  message: "닉네임에는 공백 사용이 불가합니다",
}

export const CURRENT_PASSWORD_VALIDATION_OPTION = {
  required: "현재 비밀번호를 입력해주세요",
  minLength: {
    value: 8,
    message: "현재 비밀번호는 8자 이상입니다",
  },
}

export const NEW_PASSWORD_VALIDATION_OPTION = {
  required: "새로운 비밀번호를 입력해주세요",
  minLength: {
    value: 8,
    message: "새로운 비밀번호는 8자 이상이어야 합니다",
  },
}

export const CHECK_PASSWORD_VALIDATION_OPTION = {
  required: "새로운 비밀번호를 한번 더 입력해주세요",
  minLength: {
    value: 8,
    message: "새로운 비밀번호는 8자 이상이어야 합니다",
  },
}
