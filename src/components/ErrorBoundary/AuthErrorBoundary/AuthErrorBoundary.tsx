import { Component, PropsWithChildren } from "react"

import { isAxiosError } from "axios"

import ConfirmModal from "./components/ConfirmModal"

type State = {
  hasError: boolean
  isOpen: boolean
  error: Error | null
}

interface AuthErrorBoundaryProps extends PropsWithChildren {
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
    // 에러를 잡아서 state를 업데이트하여 다음 렌더링에서 모달을 보여줄 수 있게 합니다.
    return { hasError: true, error: error }
  }

  handleClose = () => {
    this.props.reset()
    this.setState({ hasError: false, isOpen: false })
  }

  render() {
    // 401 에러가 발생한 경우 children과 모달을 같이 렌더링합니다.
    return (
      <>
        {this.props.children}
        {this.state.hasError &&
          isAxiosError(this.state.error) &&
          this.state.error.response?.status === 401 && (
            <ConfirmModal onClose={this.handleClose} />
          )}
      </>
    )
  }
}

export default AuthErrorBoundary
