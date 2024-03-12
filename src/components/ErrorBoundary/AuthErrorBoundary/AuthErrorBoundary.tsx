import { Component, PropsWithChildren } from "react"

import { isAuthError } from "@utils/isAuthError"

import { LogoutError } from "@constants/customError"

import ConfirmModal from "./components/ConfirmModal"

type State = {
  hasError: boolean
  isOpen: boolean
  error: Error | null
}

interface AuthErrorBoundaryProps extends PropsWithChildren {
  logout: () => void
  reset: () => void
}

class AuthErrorBoundary extends Component<AuthErrorBoundaryProps, State> {
  constructor(props: AuthErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      isOpen: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error) {
    // 에러를 잡아서 state를 업데이트하여 다음 렌더링에서 폴백 UI를 보여줄 수 있게 합니다.
    if (isAuthError(error)) {
      return { error }
    }
  }

  componentDidCatch(error: Error) {
    // LogoutError를 받으면 로그아웃합니다.
    if (error instanceof LogoutError) {
      this.props.logout()
    }
  }

  handleClose = () => {
    this.props.reset()
    this.setState({ error: null, isOpen: false })
  }

  render() {
    // Logout이나 Permission 에러가 발생한 경우 모달을 띄웁니다.
    console.log(this.state.error)

    return (
      <>
        {this.state.error ? (
          <ConfirmModal
            onClose={this.handleClose}
            error={this.state.error}
          />
        ) : (
          this.props.children
        )}
      </>
    )
  }
}

export default AuthErrorBoundary
