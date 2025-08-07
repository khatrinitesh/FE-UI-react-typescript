import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiRotateCcw } from "react-icons/fi";

interface ButtonLoadingSpinnerProps {
  isLoading: boolean;
  onClick: () => void;
}

const ButtonLoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate async fetch
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  return (
    <>
      <LoadingSpinner isLoading={isLoading} onClick={handleRefresh} />
    </>
  );
};

export default ButtonLoadingSpinner;

const LoadingSpinner = ({ isLoading, onClick }: ButtonLoadingSpinnerProps) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className="text-sm bg-[#09213b] text-white py-2 px-4 group disabled:opacity-50 relative"
    >
      {isLoading && (
        <FaSpinner className="size-4 animate-spin absolute top-1/2 left-1/2 -translate-1/2 " />
      )}
      <span className="flex items-center gap-2 group-disabled:opacity-0">
        <FiRotateCcw className="size-4" /> Refresh
      </span>
    </button>
  );
};
