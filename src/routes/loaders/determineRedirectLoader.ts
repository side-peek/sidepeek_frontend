import { LoaderFunction, redirect } from "react-router-dom"

import { QueryClient } from "@tanstack/query-core"

import { QUERYKEY } from "@constants/queryKey"

/**
 * @brief 회원, 비회원에 대한 페이지 접근을 결정하는 loader 함수입니다.
 * @details 첫번째 파라미터로 QueryClient를,
 * 두번째 파라미터로 회원일 경우 페이지 접근을 허락할지 결정하는 boolean 값을,
 * 세번째 파라미터로 권한이 없는 경우 리다이렉트할 url를 넘겨줍니다. (기본값: "/")
 */
export const determineRedirectLoader =
  (
    queryClient: QueryClient,
    isAllowedForLoggedInUser: boolean,
    redirectUrl: string = "/",
  ): LoaderFunction =>
  () => {
    const isLoggedInUser =
      queryClient.getQueryData([QUERYKEY.USER_INFO]) == null

    const willRedirect =
      (!isAllowedForLoggedInUser && isLoggedInUser) ||
      (isAllowedForLoggedInUser && !isLoggedInUser)

    if (import.meta.env.DEV && willRedirect) {
      alert(
        "페이지 접속 권한이 없습니다.\n원하는 동작이 아닐시 router에서 loader함수를 확인해주세요~ -동건",
      )
    }

    return willRedirect ? redirect(redirectUrl) : null
  }
