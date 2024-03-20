export const DOUBLE_CHECK_MESSAGE = {
  email: {
    ERROR: "이미 존재하는 이메일입니다.",
    SUCCESS: "사용 가능한 이메일입니다.",
  },
  nickname: {
    ERROR: "이미 존재하는 닉네임입니다.",
    SUCCESS: "사용 가능한 닉네임입니다.",
  },
}

export const SUBMIT_MESSAGE = {
  ERROR: {
    SERVER:
      "현재 서비스에 문제가 발생했습니다. 잠시 후에 다시 시도해 주시기 바랍니다.",
    INVALID: "잘못된 요청입니다.",
    UNCAUGHT: "예기치 못한 에러가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    EMAIL_CHECK: "이메일 중복 확인이 필요합니다.",
    NICKNAME_CHECK: "닉네임 중복 확인이 필요합니다.",
  },
  SUCCESS: "축하드려요! 회원가입에 성공했습니다!",
}
