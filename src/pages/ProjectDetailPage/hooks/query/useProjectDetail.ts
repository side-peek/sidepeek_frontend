import { useQuery } from "@tanstack/react-query"

const QUERY_KEY_GET_PROJECT_DETAIL = "GET_PROJECT_DETAIL_1389471984712"
const useProjectDetail = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_PROJECT_DETAIL],
  })

  return { data }
}

export default useProjectDetail
