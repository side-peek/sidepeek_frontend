import { useNavigate } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { putUserPasswordPayload } from "api-models"
import { AxiosError } from "axios"

import { useMutation } from "@tanstack/react-query"

import { putUserPassword } from "@apis/user/putUserPassword"

import useLogout from "@hooks/useLogout"

import { SUCCESS_MESSAGE } from "@pages/ProfileEditPage/constants/toastMessages"
import { toastOptions } from "@pages/ProfileEditPage/constants/toastOptions"

const usePutUserPassword = (
  handleClose: () => void,
  setServerErrorMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  const toast = useToast(toastOptions)
  const logout = useLogout()
  const navigate = useNavigate()

  interface ErrorResponse {
    message: string
  }

  function isErrorWithMessage(data: {
    message: unknown
  }): data is ErrorResponse {
    return data && typeof data.message === "string"
  }

  const putUserPasswordMutation = useMutation({
    mutationFn: async (formData: putUserPasswordPayload) =>
      await putUserPassword(formData),
    onSuccess() {
      toast({
        status: "success",
        title: SUCCESS_MESSAGE.password.SUCCESS,
      })
      handleClose()
      logout()
      alert("비밀번호가 변경되었습니다. \n로그인을 다시 해주세요")
      navigate("/login")
    },
    onError(error: AxiosError) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data) && !!error.response.data[0]) {
          setServerErrorMessage(error.response.data[0].message)
        } else if (isErrorWithMessage(error.response.data as ErrorResponse)) {
          // eslint-disable-next-line
          // @ts-ignore
          setServerErrorMessage(error.response.data.message)
        }
      }
    },
  })
  return { putUserPasswordMutation }
}

export default usePutUserPassword
