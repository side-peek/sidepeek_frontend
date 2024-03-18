import { FieldPath, RegisterOptions } from "react-hook-form"

import { ProjectFormValues } from "../types/ProjectFormValues"

const TITLE_MAX_LENGTH = 50
const OVERVIEW_MAX_LENGTH = 300

type ProjectInputRegisterType = {
  [key in FieldPath<ProjectFormValues>]: RegisterOptions
}

export const projectInputRegister: ProjectInputRegisterType = {
  name: {
    required: `제목은 필수입니다.${TITLE_MAX_LENGTH} 이내로 입력해주세요.`,
    maxLength: TITLE_MAX_LENGTH,
  },

  subName: {},

  overview: { maxLength: OVERVIEW_MAX_LENGTH },

  githubUrl: { required: "Github URL은 필수입니다" },

  deployUrl: {},

  thumbnailUrl: {},

  startDate: { required: "프로젝트 시작 날짜를 입력해주세요" },

  endDate: { required: "프로젝트 완성 날짜를 입력해주세요" },

  techStacks: { required: "하나 이상은 필수입니다" },

  overviewImageUrl: {},
}
