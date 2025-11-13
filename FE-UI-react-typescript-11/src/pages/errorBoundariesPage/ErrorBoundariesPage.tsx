/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component } from "react";
import { motion } from "framer-motion";
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
          <motion.div
            className="py-[150px] h-dvh flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[#09213b] fontpoppinssb text-[2.5rem] lg:text-[3.75rem]"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              SOMETHING WENT WRONG
            </motion.h1>

            <motion.p
              className="text-black text-[1rem] my-[20px] leading-normal fontpoppinsr"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {this.state.error?.message}
            </motion.p>
          </motion.div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundariesPage;
