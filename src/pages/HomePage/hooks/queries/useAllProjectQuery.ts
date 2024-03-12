import { useInfiniteQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

const QUERY_KEYS = "projects"

const useAllProjectQuery = (
  sort: string,
  isReleased: boolean,
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
      QUERY_KEYS,
      sort,
      isReleased,
      pageSize,
      lastProjectId,
      lastProjectNum,
    ],
    queryFn: () =>
      getAllProjects({
        sort,
        isReleased,
        pageSize,
        lastProjectId,
        lastProjectNum,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext
        ? lastPage.content[lastPage.numberOfElements - 1].id
        : null,
    select: ({ pages }) => pages.flatMap((page) => page),
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

export default useAllProjectQuery
