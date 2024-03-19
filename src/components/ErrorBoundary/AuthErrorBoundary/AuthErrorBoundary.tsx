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
    if (isAuthError(error)) {
      return { error }
    }
  }

  componentDidCatch(error: Error) {
    if (error instanceof LogoutError) {
      this.props.logout()
    }
  }

  handleClose = () => {
    this.props.reset()
    this.setState({ error: null, isOpen: false })
  }

  render() {
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
