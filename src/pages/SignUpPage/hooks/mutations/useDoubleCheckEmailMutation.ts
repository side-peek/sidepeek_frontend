import { useMutation } from "@tanstack/react-query"

import { postDoubleCheckEmail } from "@/api/user/postDoubleCheckEmail"

import { DoubleCheckProps } from "@pages/SignUpPage/types/DoubleCheckProps"

const useDoubleCheckEmailMutaion = ({
  setError,
  trigger,
}: DoubleCheckProps) => {
  return useMutation({
    mutationFn: (email: string) => postDoubleCheckEmail({ email }),
    onSuccess: (response) => {
      if (response.isDuplicated) {
        setError()
      } else {
        trigger()
      }
    },
  })
}

export default useDoubleCheckEmailMutaion
