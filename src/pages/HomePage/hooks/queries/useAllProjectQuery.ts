import { useQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

const useAllProjectQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
  })

  return {
    allProjectList: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
  }
}

export default useAllProjectQuery
