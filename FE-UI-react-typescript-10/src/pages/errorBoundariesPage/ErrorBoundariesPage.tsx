/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component } from "react";
import type { Props, State } from "../../interface";

class ErrorBoundariesPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="py-[150px] h-dvh flex flex-col items-center justify-center text-center">
            <h1 className="text-[#09213b] poppins-regular text-[2.5rem] ">
              SOMETHING WENT WRONG
            </h1>

            <p className="text-black text-[1rem] my-[20px] leading-normal  poppins-regular">
              {this.state.error?.message}
            </p>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundariesPage;
