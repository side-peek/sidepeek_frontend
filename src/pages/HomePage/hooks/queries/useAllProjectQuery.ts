import { useInfiniteQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

import { QUERYKEY } from "@constants/queryKey"

export const useAllProjectQuery = (
  sortOption: "createdAt" | "like" | "view",
  isDeploy: boolean,
  pageSize: number,
  lastProjectId: number | null,
  lastProjectNum: number | null,
) => {
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
      isDeploy,
      pageSize,
      lastProjectId,
      lastProjectNum,
    ],
    queryFn: () =>
      getAllProjects({
        sort: sortOption,
        isReleased: isDeploy,
        pageSize,
        lastProjectId,
        lastProjectNum,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext
        ? lastPage.content[lastPage.numberOfElements - 1].id
        : null,
    select: ({ pages }) => pages.flatMap((page) => page.content),
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
