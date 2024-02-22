import axios from "axios"

import { projectType } from "../HomePage"

interface getProjectListResponse {
  projects: projectType[]
}

const axiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
}

export const getProjectList = async () => {
  try {
    const res = await axios
      .create(axiosRequestConfig)
      .get<getProjectListResponse>("/api/v1/projects")

    return res.data
  } catch (e) {
    console.error("hi")
    return null
  }
}
