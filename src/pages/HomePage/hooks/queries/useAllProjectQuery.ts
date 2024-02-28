import { useQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

const useAllProjectQuery = (isDeploy: boolean) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
    select: (projects) =>
      projects.projects.filter((project) =>
        isDeploy ? project.isDeploy : project,
      ),
  })

  return {
    allProjectList: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
  }
}

export default useAllProjectQuery
