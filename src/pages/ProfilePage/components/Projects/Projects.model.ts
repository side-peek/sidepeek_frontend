import { useQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

export const useMyProjects = () => {}
export const useLikedProjects = () => {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
    gcTime: 0,
  })

  return { data }
}
export const useCommentedProjects = () => {}
