import { FieldPath, RegisterOptions } from "react-hook-form"

import {
  ProjectFormValues,
  RequestedMemberType,
} from "../types/ProjectFormValues"
import { checkEmptyField } from "../utils/checkEmptyField"

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

  startDate: {
    required: "프로젝트 시작 날짜를 입력해주세요",
    validate: {
      checkOrder: (_, formValue) => {
        const [start, end] = [formValue.startDate, formValue.endDate]
        return new Date(start) < new Date(end)
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

  members: {
    required: "하나 이상은 필수입니다",
    validate: {
      isEmpty: (data: { category: string; data: RequestedMemberType[] }[]) =>
        !checkEmptyField<RequestedMemberType>(data) ||
        "멤버를 한명은 넣어주세요",
    },
  },

  description: {},

  troubleShooting: {},
}
