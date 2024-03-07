import { useInfiniteQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

const QUERY_KEYS = "projects"

const useAllProjectQuery = (
  sort: string,
  isReleased: boolean,
  limit: number,
) => {
  const {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS, sort, isReleased, limit],
    queryFn: ({ pageParam }) =>
      getAllProjects({ sort, isReleased, offset: pageParam, limit }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.projects.length ? allPages.length * limit : null,
    select: ({ pages }) => pages.flatMap((page) => page.projects),
  })

  return {
    allProjectList: data,
    isAllProjectLoading: isLoading,
    refetchAllProject: refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}

export default useAllProjectQuery
