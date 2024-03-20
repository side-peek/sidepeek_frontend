import { putUserPasswordPayload } from "api-models"

import { useMutation } from "@tanstack/react-query"

import { putUserPassword } from "@apis/user/putUserPassword"

const usePutUserPassword = () => {
  const putUserPasswordMutation = useMutation({
    mutationFn: async (formData: putUserPasswordPayload) =>
      await putUserPassword(formData),
    onSuccess() {
      alert("비밀번호가 변경되었습니다")
    },
  })
  return { putUserPasswordMutation }
}

export default usePutUserPassword
