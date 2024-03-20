import { Component, PropsWithChildren } from "react"

import UncaughtFallback from "./components/UncaughtFallback"

type State = {
  error: Error | null
}

interface UncaughtErrorBoundaryProps extends PropsWithChildren {
  reset: () => void
}

class UncaughtErrorBoundary extends Component<
  UncaughtErrorBoundaryProps,
  State
> {
  constructor(props: UncaughtErrorBoundaryProps) {
    super(props)
    this.state = {
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  handleReset = () => {
    this.props.reset()
    this.setState({ error: null })
  }

  render() {
    return (
      <>
        {this.state.error ? (
          <UncaughtFallback
            onReset={this.handleReset}
            error={this.state.error}
          />
        ) : (
          this.props.children
        )}
      </>
    )
  }
}

export default UncaughtErrorBoundary
