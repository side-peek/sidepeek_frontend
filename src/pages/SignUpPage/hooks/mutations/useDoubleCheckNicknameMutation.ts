import { useMutation } from "@tanstack/react-query"

import { postDoubleCheckNickname } from "@apis/user/postDoubleCheckNickname"

import { DoubleCheckProps } from "@pages/SignUpPage/types/DoubleCheckProps"

const useDoubleCheckNicknameMutation = ({ setError }: DoubleCheckProps) => {
  return useMutation({
    mutationFn: (nickname: string) => postDoubleCheckNickname({ nickname }),
    onSuccess: (response) => {
      if (response.isDuplicated) {
        setError()
      }
    },
  })
}

export default useDoubleCheckNicknameMutation
