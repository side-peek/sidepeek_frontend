import { VARIABLE_URL } from "./endPoints"

const { VITE_BASE_URL } = import.meta.env

export const EXTERNAL_LINKS = {
  GITHUB_LOGIN: `${VITE_BASE_URL}${VARIABLE_URL}/oauth2/authorization/github`,
}
