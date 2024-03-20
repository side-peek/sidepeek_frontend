import { PropsWithChildren } from "react"

import { useQueries } from "@tanstack/react-query"

import { userInfoOptions } from "@/services/queries/userInfoOptions"

import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"

/**
 * @brief 웹앱 마운트전에 필요한 데이터를 프리패칭합니다.
 * @details useQueries의 queries 속성값 배열에 프리패칭할 쿼리 옵션을 넣어줍니다.
 */
const Prefetcher = ({ children }: PropsWithChildren) => {
  const isLoading = useQueries({
    queries: [userInfoOptions],
    combine: (results) => results.some((result) => result.isLoading),
  })

  if (isLoading) return <FullScreenSpinner />

  return <>{children}</>
}

export default Prefetcher
