import { Outlet } from "react-router-dom"

import { Center, Spinner } from "@chakra-ui/react"

import { useQueries } from "@tanstack/react-query"

import { userInfoOptions } from "@/services/queries/userInfoOptions"

/**
 * @brief 웹앱 마운트전에 필요한 데이터를 프리패칭합니다.
 * @details useQueries의 queries 속성값 배열에 프리패칭할 쿼리 옵션을 넣어줍니다.
 */
const Prefetcher = () => {
  const isLoading = useQueries({
    queries: [userInfoOptions],
    combine: (results) => results.some((result) => result.isLoading),
  })

  if (isLoading)
    return (
      <Center
        width="100vw"
        height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          width="8rem"
          height="8rem"
        />
      </Center>
    )

  return <Outlet />
}

export default Prefetcher
