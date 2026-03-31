import React from "react";


interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
          <p className="mt-2 text-gray-600">Please try again later</p>
        </div>
      );
    }

    return this.props.children;
  }
}
