import { Component, ErrorInfo, PropsWithChildren } from "react"

import { QueryErrorResetBoundaryValue } from "node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary"

import ConfirmModal from "./components/ConfirmModal"

type State = {
  hasError: boolean
  isOpen: boolean
  error: Error | null
} & QueryErrorResetBoundaryValue

interface AuthErrorBoundaryProps
  extends QueryErrorResetBoundaryValue,
    PropsWithChildren {}

class AuthErrorBoundary extends Component<AuthErrorBoundaryProps, State> {
  constructor(props: AuthErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      isOpen: false,
      error: null,
      ...props,
    }
  }

  static getDerivedStateFromError(error: Error) {
    // 에러를 잡아서 state를 업데이트하여 다음 렌더링에서 폴백 UI를 보여줄 수 있게 합니다.
    return { hasError: true, error: error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 여기에 에러 리포팅 서비스에 에러를 기록하는 코드를 넣을 수 있습니다.
    console.log("error bounary caught error", error, errorInfo)
  }

  handleClose = () => {
    this.state.reset()
    this.setState({ hasError: false, isOpen: false })
  }

  render() {
    // 401 에러가 발생한 경우 사용자 정의 폴백 UI를 렌더링할 수 있습니다.
    return (
      <>
        {this.props.children}
        {/* <Outlet /> */}
        {this.state.hasError && (
          // isAxiosError(this.state.error) &&
          // this.state.error.response?.status === 401
          <ConfirmModal onClose={this.handleClose} />
        )}
      </>
    )
  }
}

export default AuthErrorBoundary
