import { Component } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40 }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
