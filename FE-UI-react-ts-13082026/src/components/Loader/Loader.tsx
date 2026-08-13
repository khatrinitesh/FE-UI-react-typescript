interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Loader = ({ size = "md", className = "" }: LoaderProps) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <span
      role="status"
      aria-label="Loading"
      className={`
        inline-block
        animate-spin
        rounded-full
        border-gray-300
        border-t-black
        ${sizes[size]}
        ${className}
      `}
    />
  );
};

export default Loader;
