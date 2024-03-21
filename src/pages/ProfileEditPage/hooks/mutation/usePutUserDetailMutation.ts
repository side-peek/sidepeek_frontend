import { useNavigate } from "react-router-dom"

import { useToast } from "@chakra-ui/react"
import { putUserDetailPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { putUserDetail } from "@apis/user/putUserDetail"

import { SUCCESS_MESSAGE } from "@pages/ProfileEditPage/constants/toastMessages"
import { toastOptions } from "@pages/ProfileEditPage/constants/toastOptions"

const usePutUserDetailMutation = (userId: number) => {
  const navigate = useNavigate()
  const toast = useToast(toastOptions)
  const queryClient = useQueryClient()

  const putUserDetailMutation = useMutation({
    mutationFn: async (formData: putUserDetailPayload) =>
      await putUserDetail(formData),

    onSuccess() {
      toast({
        status: "success",
        title: SUCCESS_MESSAGE.submit.SUCCESS,
      })
      queryClient.invalidateQueries({ queryKey: ["userInfo", userId] })
      navigate(`/profile/${userId}`)
    },
  })

  return {
    putUserDetailMutation,
  }
}

export default usePutUserDetailMutation
