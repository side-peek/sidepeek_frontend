import { useLocation, useNavigate } from "react-router-dom"

const useQueryString = (paramsName: string) => {
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = new URLSearchParams(location.search)
  const paramsValue = paramsName && searchParams.get(paramsName)

  return { navigate, paramsValue }
}

export default useQueryString
