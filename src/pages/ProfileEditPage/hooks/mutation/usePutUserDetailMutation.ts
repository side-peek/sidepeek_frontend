import { putUserDetailPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { putUserDetail } from "@apis/user/putUserDetail"

const usePutUserDetailMutation = () => {
  const putUserDetailMutation = useMutation({
    mutationFn: async (formData: putUserDetailPayload) =>
      await putUserDetail(formData),
    onSuccess(data) {
      console.log("putUserDetail 성공", data)
    },
  })
  return {
    putUserDetailMutation,
  }
}

export default usePutUserDetailMutation
