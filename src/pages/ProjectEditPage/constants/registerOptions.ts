import { RegisterOptions } from "react-hook-form"

import { useTechStackStore } from "@stores/useTechStackStore"

import { URL_REGEX } from "@constants/regExp"

import { useMemberStore } from "../components/MemberFields/stores/useMemberStore"

const TITLE_MAX_LENGTH = 50
const OVERVIEW_MAX_LENGTH = 300

type ProjectInputRegisterType = {
  [key in string]: RegisterOptions
}

export const projectInputRegister: ProjectInputRegisterType = {
  name: {
    required: `제목은 필수입니다.${TITLE_MAX_LENGTH} 이내로 입력해주세요.`,
    maxLength: {
      value: TITLE_MAX_LENGTH,
      message: `최대 ${TITLE_MAX_LENGTH}자 이내로 작성해주세요`,
    },
  },

  overview: {
    maxLength: {
      value: OVERVIEW_MAX_LENGTH,
      message: `최대 ${OVERVIEW_MAX_LENGTH}자 이내로 작성해주세요`,
    },
  },

  githubUrl: {
    required: "github 링크는 필수입니다",
    pattern: {
      value: URL_REGEX,
      message: "유효한 URL 형식이 아닙니다",
    },
    validate: {
      isValidGithubUrl: (_, formValue) =>
        formValue.github && formValue.includes("https://github.com/"),
    },
  },

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

  deployUrl: {
    required: "배포한 링크를 입력해주세요",
    pattern: {
      value: URL_REGEX,
      message: "유효한 URL 형식이 아닙니다",
    },
  },

  members: {
    validate: () => {
      const { fields } = useMemberStore.getState()
      const isMemberFieldsValid = fields.every((field) => {
        const isRoleValid = field.role && field.role.trim().length > 0
        const isCategoryValid =
          Array.isArray(field.userSummary) && field.userSummary.length > 0
        return isRoleValid && isCategoryValid
      })
      return isMemberFieldsValid || "분야와 함께 작업한 팀원을 추가해주세요"
    },
  },

  techStacks: {
    validate: () => {
      const { fields } = useTechStackStore.getState()
      const isMemberFieldsValid = fields.every((field) => {
        const isRoleValid = field.category && field.category.trim().length > 0
        const isCategoryValid =
          Array.isArray(field.skill) && field.skill.length > 0
        return isRoleValid && isCategoryValid
      })
      return (
        isMemberFieldsValid ||
        "기술 스택 분야와 함께 한개 이상의 기술스택을 선택해주세요"
      )
    },
  },
}
