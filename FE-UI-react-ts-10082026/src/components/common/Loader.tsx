import { LoaderCircle } from "lucide-react";

interface LoaderProps {
  size?: number;
  className?: string;
}

const Loader = ({ size = 24, className = "" }: LoaderProps) => {
  return <LoaderCircle size={size} className={`animate-spin ${className}`} />;
};

export default Loader;
