import { User } from "api-models"

export const AUTH_USER_INITIAL_USER_DATA: User = {
  id: "",
  nickname: "",
  provider: "",
  email: "",
  password: "",
  profile_image_url: "",
  introduction: "",
  job: "",
  career: "",
  github_url: "",
  blog_url: "",
  created_at: "",
  updated_at: "",
  deleted_at: "",
  is_deleted: false,
}

export const AUTH_USER_TEST_DATA: User = {
  id: "123",
  nickname: "123",
  provider: "123",
  email: "123",
  password: "123",
  profile_image_url: "123",
  introduction: "123",
  job: "123",
  career: "123",
  github_url: "123",
  blog_url: "123",
  created_at: "123",
  updated_at: "123",
  deleted_at: "123",
  is_deleted: false,
}
