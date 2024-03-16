import { useMutation } from "@tanstack/react-query"

import { postDoubleCheckEmail } from "@apis/user/postDoubleCheckEmail"

import { DoubleCheckProps } from "@pages/SignUpPage/types/DoubleCheckProps"

const useDoubleCheckEmailMutaion = ({ setError }: DoubleCheckProps) => {
  return useMutation({
    mutationFn: (email: string) => postDoubleCheckEmail({ email }),
    onSuccess: (response) => {
      if (response.isDuplicated) {
        setError()
      }
    },
  })
}

export default useDoubleCheckEmailMutaion
