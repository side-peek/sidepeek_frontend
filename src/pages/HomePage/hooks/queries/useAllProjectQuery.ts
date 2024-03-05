import { useQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

const useAllProjectQuery = (userId: number, sort: string, status: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["projects", userId, sort, status],
    queryFn: () => getAllProjects(userId, sort, status),
  })

  return {
    allProjectList: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
  }
}

export default useAllProjectQuery
