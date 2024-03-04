const VARIABLE_URL = "/api/v1"

export const ENDPOINTS = {
  GITHUB_LOGIN: `${VARIABLE_URL}/auth/login/github`,
  EMAIL_LOGIN: `${VARIABLE_URL}/auth/login`,
  EMAIL_REFRESH: `${VARIABLE_URL}/auth/refresh`,
  EMAIL_AUTH: `${VARIABLE_URL}/auth/login/github`,
  EMAIL_SIGNUP: `${VARIABLE_URL}/users/signup`,
  GET_USER_NICKNAME: `${VARIABLE_URL}/users?keyword=`,
  GET_USER_PROFILE: (userId: number) => `${VARIABLE_URL}/users/${userId}`,
  PUT_USER_PROFILE: (userId: number) => `${VARIABLE_URL}/users/${userId}`,
  PUT_USER_PASSWORD: (userId: number) =>
    `${VARIABLE_URL}/users/${userId}/password`,
  EMAIL_DOUBLE_CHECK: `${VARIABLE_URL}/users/email/check`,
  NICKNAME_DOUBLE_CHECK: `${VARIABLE_URL}/users/nickname/check`,
  GET_SKILLS: (keyword: string) =>
    `${VARIABLE_URL}/skills${keyword ? `?keyword=${keyword}` : ""}`,
  UPLOAD_PROJECT_FILES: `${VARIABLE_URL}/projects/files`,
  UPLOAD_PROJECT: `${VARIABLE_URL}/projects`,
  PUT_PROJECT: (projectId: number) => `${VARIABLE_URL}/projects/${projectId}`,
  DELETE_PROJECT: (projectId: number) =>
    `${VARIABLE_URL}/projects/${projectId}`,
  GET_PROJECT_DETAILS: (projectId: number) =>
    `${VARIABLE_URL}/projects/${projectId}`,
  GET_ALL_PROJECTS: `${VARIABLE_URL}/projects`,
  UPLOAD_LIKE: `${VARIABLE_URL}/likes`,
  POST_COMMENT: (projectId: number) =>
    `${VARIABLE_URL}/projects/${projectId}/comments`,
  DELETE_COMMENT: (projectId: number, id: number) =>
    `${VARIABLE_URL}/projects/${projectId}/comments/${id}`,
}
