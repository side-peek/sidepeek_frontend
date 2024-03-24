import { useQueryClient } from "@tanstack/react-query"

import authToken from "@stores/authToken"

import { QUERYKEY } from "@constants/queryKey"

const useLogout = () => {
  const queryClient = useQueryClient()
  return () => {
    authToken.removeAccessToken()
    authToken.removeRefreshToken()
    queryClient.removeQueries({ queryKey: [QUERYKEY.USER_INFO] })
  }
}

export default useLogout
