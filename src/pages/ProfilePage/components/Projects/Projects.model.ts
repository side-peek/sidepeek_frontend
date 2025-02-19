import { useQuery } from "@tanstack/react-query"

import { getUserProjects } from "@apis/user/getUserProjects"

interface UserProjectsProps {
  userId: number
  type: string
  page: number
  size: number
}

export const useUserProjects = ({
  userId,
  type,
  page,
  size,
}: UserProjectsProps) => {
  const { data } = useQuery({
    queryKey: ["projects", userId, type, page, size],
    queryFn: () => getUserProjects({ userId, type, page, size }),
    staleTime: 1000 * 60 * 5,
  })
  return { data }
}
