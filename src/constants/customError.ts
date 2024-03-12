export class LogoutError extends Error {
  name = "Logout"
  message = "로그아웃 처리됩니다."
}

export class PermissionError extends Error {
  name = "PermissionError"
  message = "권한이 없습니다."
}
