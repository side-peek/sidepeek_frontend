import { getAllProjectsType } from "api-models"

import { useInfiniteQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

import { QUERYKEY } from "@constants/queryKey"

export const useAllProjectQuery = ({
  sortOption,
  isReleased,
  lastProjectId,
  lastProject,
}: getAllProjectsType) => {
  const {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: [
      QUERYKEY.ALL_PROJECTS,
      sortOption,
      isReleased,
      lastProjectId,
      lastProject,
    ],
    queryFn: () =>
      getAllProjects({
        sortOption,
        isReleased,
        lastProjectId,
        lastProject,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (
      (lastProject = lastPage.content[lastPage.numberOfElements - 1]),
      (lastProjectId = lastPage.hasNext
        ? lastPage.content[lastPage.numberOfElements - 1].id
        : null)
    ),
  })

  return {
    allProjectList: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  }
}
