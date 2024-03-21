export const RegEx = {
  CHECK_SPACE: /\s/,
  CHECK_URL:
    /^([^:/\s]+)(:([^/]*))?((\/[^\s/]+)*)?\/?([^#\s?]*)(\?([^#\s]*))?(#(\w*))?$/,
  // /^(https?):\/\/([^:/\s]+)(:([^/]*))?((\/[^\s/]+)*)?\/?([^#\s?]*)(\?([^#\s]*))?(#(\w*))?$/,
  CHECK_GITHUB_URL:
    /^github\.com\/([^:/\s]+)(:([^/]*))?((\/[^\s/]+)*)?\/?([^#\s?]*)(\?([^#\s]*))?(#(\w*))?$/,
  // /^https:\/\/github\.com\/([^:/\s]+)(:([^/]*))?((\/[^\s/]+)*)?\/?([^#\s?]*)(\?([^#\s]*))?(#(\w*))?$/,
}

export const NICKNAME_VALIDATION_OPTION = {
  required: "새로운 닉네임을 입력해주세요",
  pattern: {
    value: /^[a-zA-Z0-9가-힣]+$/,
    message: "닉네임은 특수문자를 사용할 수 없습니다",
  },
  maxLength: {
    value: 12,
    message: "닉네임은 최대 12글자까지 가능합니다",
  },
  minLength: {
    value: 2,
    message: "닉네임은 최소 2글자 이상 입력하여야 합니다",
  },
}

export const NICKNAME_NOSPACE_ERROR = {
  type: "nickname-space",
  message: "닉네임에는 공백 사용이 불가합니다",
}

export const CURRENT_PASSWORD_VALIDATION_OPTION = {
  required: "현재 비밀번호를 입력해주세요",
  // minLength: {
  //   value: 8,
  //   message: "현재 비밀번호는 8자 이상입니다",
  // },
}

export const NEW_PASSWORD_VALIDATION_OPTION = {
  required: "새로운 비밀번호를 입력해주세요",
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
    message: "문자, 숫자, 특수문자를 포함해야 합니다",
  },
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

export const PASSWORD_MISMATCH_ERROR = {
  type: "password-mismatch",
  message: "비밀번호가 일치하지 않습니다",
}

export const BLOG_URL_VALIDATION_OPTION = {
  pattern: {
    value: RegEx.CHECK_URL,
    message: "Blog 링크를 다시 확인해주세요",
  },
}

export const GITHUB_URL_VALIDATION_OPTION = {
  pattern: {
    value: RegEx.CHECK_GITHUB_URL,
    message: "Github 링크를 다시 확인해주세요",
  },
}
