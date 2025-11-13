import React from "react";
import type { Props, State } from "../../interface";

class ErrorBoundariesPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. (Error Boundary)</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundariesPage;
