import { getAllProjectsType } from "api-models"

import { useInfiniteQuery } from "@tanstack/react-query"

import { getAllProjects } from "@apis/project/getAllProjects"

import { QUERYKEY } from "@constants/queryKey"

export const useAllProjectQuery = ({
  sortOption,
  isReleased,
  lastProjectId,
  lastOrderCount,
  search,
  skill,
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
      lastOrderCount,
      search,
      skill,
    ],
    queryFn: ({ pageParam }) =>
      getAllProjects({
        sortOption,
        isReleased,
        lastProjectId: pageParam,
        lastOrderCount,
        search,
        skill,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext
        ? lastPage.content[lastPage.numberOfElements - 1].id
        : null,
  })

  return {
    pageData: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  }
}
