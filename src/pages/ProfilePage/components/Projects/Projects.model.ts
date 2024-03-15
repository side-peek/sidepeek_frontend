import { getUserProjects } from "@api/user/getUserProjects"

import { useQuery } from "@tanstack/react-query"

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
  })
  return { data }
}
