import { useMutation } from "@tanstack/react-query"

import { postDoubleCheckEmail } from "@apis/user/postDoubleCheckEmail"
import { postDoubleCheckNickname } from "@apis/user/postDoubleCheckNickname"

interface UseDoubleCheckMutaion {
  setError: () => void
}

export const useDoubleCheckMutaion = ({ setError }: UseDoubleCheckMutaion) => {
  return {
    email: useMutation({
      mutationFn: (email: string) => postDoubleCheckEmail({ email }),
      onSuccess: (response) => {
        if (response.isDuplicated) {
          setError()
        }
      },
    }),
    nickname: useMutation({
      mutationFn: (nickname: string) => postDoubleCheckNickname({ nickname }),
      onSuccess: (response) => {
        if (response.isDuplicated) {
          setError()
        }
      },
    }),
  }
}
