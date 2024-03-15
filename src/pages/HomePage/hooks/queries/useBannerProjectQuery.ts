import { getBannerProjects } from "@api/project/getBannerProjects"

import { useQuery } from "@tanstack/react-query"

import { QUERYKEY } from "@constants/queryKey"

export const useBannerProjectQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERYKEY.BANNER_PROJECTS],
    queryFn: () => getBannerProjects(),
  })

  return {
    bannerProjectList: data,
    isBannerLoading: isLoading,
  }
}
