export interface TechStack {
  skillId?: number
  category?: string
}

export interface ProfileInfo {
  profileImageUrl: string
  nickname: string
  career: string
  introduction: string
  githubUrl: string
  blogUrl: string
  job: string
  techStacks: TechStack[]
}

export type CareerType =
  | "0년차"
  | "1~3년차"
  | "4~6년차"
  | "7~9년차"
  | "10년차 이상"

export interface PasswordFormValues {
  currentPassword: string
  newPassword: string
  checkPassword: string
}

export interface NicknameFormValues {
  newNickname: string
}
