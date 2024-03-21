import { LoaderFunction, redirect } from "react-router-dom"

const { VITE_AUTH_JWT_TOKEN_STORAGE_KEY } = import.meta.env

/**
 * @brief 회원, 비회원에 대한 페이지 접근을 결정하는 loader 함수입니다.
 * @details 첫번째 파라미터로 QueryClient를,
 * 두번째 파라미터로 회원일 경우 페이지 접근을 허락할지 결정하는 boolean 값을,
 * 세번째 파라미터로 권한이 없는 경우 리다이렉트할 url를 넘겨줍니다. (기본값: "/")
 */
export const determineRedirectLoader =
  (
    isAllowedForLoggedInUser: boolean,
    redirectUrl: string = "/",
  ): LoaderFunction =>
  () => {
    const isLoggedInUser = !!localStorage.getItem(
      VITE_AUTH_JWT_TOKEN_STORAGE_KEY,
    )

    const willRedirect =
      (!isAllowedForLoggedInUser && isLoggedInUser) ||
      (isAllowedForLoggedInUser && !isLoggedInUser)

    if (willRedirect) {
      alert("권한이 없습니다. 다시 시도해주세요.")
    }

    return willRedirect ? redirect(redirectUrl) : null
  }
