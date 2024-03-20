import { FieldPath, RegisterOptions } from "react-hook-form"

import { ProjectFormValues } from "../types/ProjectFormValues"
import { regex } from "./validate"

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

  githubUrl: {
    required: "Github URL은 필수입니다",
    pattern: {
      value: regex,
      message: "유효한 url이 아닙니다.",
    },
  },

  deployUrl: {},

  thumbnailUrl: {},

  startDate: {
    required: "프로젝트 시작 날짜를 입력해주세요",
    validate: {
      checkOrder: (_, formValue) => {
        const [start, end] = [formValue.startDate, formValue.endDate]
        return new Date(start) < new Date(end) || "날짜를 다시 확인해주세요"
      },
    },
  },

  endDate: {
    required: "프로젝트 완성 날짜를 입력해주세요",
    validate: {
      checkOrder: (_, formValue) => {
        const [start, end] = [formValue.startDate, formValue.endDate]
        return new Date(start) < new Date(end)
      },
    },
  },

  techStacks: {},

  overviewImageUrl: {},

  members: {},

  description: {},

  troubleShooting: {},
}
