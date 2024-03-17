import { useNavigate } from "react-router-dom"

import { putUserDetailPayload } from "api-models"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { putUserDetail } from "@apis/user/putUserDetail"

const usePutUserDetailMutation = (userId: number) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const putUserDetailMutation = useMutation({
    mutationFn: async (formData: putUserDetailPayload) =>
      await putUserDetail(formData),

    onSuccess(data) {
      console.log("putUserDetail 성공", data)
      alert("프로필 수정이 완료되었습니다")
      queryClient.invalidateQueries({ queryKey: ["userInfo", userId] })
      navigate(`/profile/${userId}`)
    },
  })

  return {
    putUserDetailMutation,
  }
}

export default usePutUserDetailMutation
