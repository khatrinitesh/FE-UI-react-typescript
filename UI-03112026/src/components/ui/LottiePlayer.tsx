import { useQuery } from "@tanstack/react-query";
import { Lottie } from "lottie-react";

import { lottieUrl } from "../../lib/assets";

interface LottiePlayerProps {
  filename: string;
  className?: string;
}

export function LottiePlayer({
  filename,
  className,
}: LottiePlayerProps) {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["lottie", filename],

    queryFn: async () => {
      const response = await fetch(
        lottieUrl(filename)
      );

      if (!response.ok) {
        throw new Error(
          `Cannot load ${filename}`
        );
      }

      return response.json() as Promise<object>;
    },
  });

  if (isLoading) {
    return (
      <span role="status">
        Loading animation…
      </span>
    );
  }

  if (isError || !data) {
    return (
      <span role="alert">
        Animation unavailable
      </span>
    );
  }

  return (
    <Lottie
      animationData={data}
      loop
      className={className}
    />
  );
}