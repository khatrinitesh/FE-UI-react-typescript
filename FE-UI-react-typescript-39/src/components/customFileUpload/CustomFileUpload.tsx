import { useRef } from "react";
import { useFileUploadStore } from "../../store/useFileUploadStore";
import { motion } from "framer-motion";
import { ACCEPTED_FILE_TYPES } from "../../constants/constants";

const CustomFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { fileName, setFile, clearFile } = useFileUploadStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFile(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_FILE_TYPES}
        onChange={handleFileChange}
        className="hidden"
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        onClick={openFileDialog}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Upload File
      </motion.button>

      {fileName && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg"
        >
          <span className="text-sm">{fileName}</span>

          <button onClick={clearFile} className="text-red-500 text-sm">
            Remove
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CustomFileUpload;
