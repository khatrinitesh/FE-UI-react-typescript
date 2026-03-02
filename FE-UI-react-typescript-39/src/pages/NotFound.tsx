import { motion } from "framer-motion";
import { Link } from "react-router";
import { Home } from "lucide-react";
import { PATH } from "../router/path";
import Button from "./../components/ui/Button";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center gap-5 grid items-center justify-center"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-extrabold text-blue-600"
        >
          404
        </motion.h1>

        {/* Message */}
        <p className="mt-4 text-xl text-gray-700 font-semibold">
          Oops! Page Not Found
        </p>

        <p className="mt-2 text-gray-500">
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <div className="flex items-center justify-center">
          {/* Back Home Button */}
          <Link to={PATH.HOME}>
            <Button>
              <Home size={18} />
              Go Back Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
