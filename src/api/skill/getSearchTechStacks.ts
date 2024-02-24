import {
  getSearchTechStacksPayload,
  getSearchTechStacksResponseType,
} from "api-models"
import { AxiosRequestConfig } from "axios"

import { ENDPOINTS } from "@constants/endPoints"

import { baseInstance } from "../axiosInstance"

/**
 * @brief 검색하고자 하는 기술 스택 목록(배열)을 반환합니다.
 * @details 문자 중에 keyword를 포함하는 기술 스택을 가져옵니다. keyword가 없으면 전체 기술 스택을 불러옵니다.
 */
export const getSearchTechStacks = async (
  { keyword }: getSearchTechStacksPayload,
  config: AxiosRequestConfig = {},
) => {
  const { data } = await baseInstance.get<getSearchTechStacksResponseType>(
    ENDPOINTS.GET_SKILLS(keyword),
    { ...config },
  )

  return data
}