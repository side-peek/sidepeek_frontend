import { getUserListResponseType } from "api-models"

import { baseInstance } from "../axiosInstance"

export const getUserListByNickname = async (keyword: string) => {
  const { data } = await baseInstance.get<getUserListResponseType>(
    `/api/v1/users/nickname?keyword=${keyword}`,
  )
  return data
}
