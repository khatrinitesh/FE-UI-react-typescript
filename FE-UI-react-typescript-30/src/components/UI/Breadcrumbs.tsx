import React from "react";
import { BREADCRUMBS } from "../../constants/constants";
import { motion } from "framer-motion";

const Breadcrumbs = () => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 text-sm p-4 bg-gray-50 rounded-lg">
      {BREADCRUMBS.map((crumb, idx) => (
        <React.Fragment key={crumb.id}>
          <motion.a
            href={crumb.href}
            className="hover:text-blue-500 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {crumb.label}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded"
              layoutId="breadcrumb-underline"
            />
          </motion.a>

          {idx < BREADCRUMBS.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
