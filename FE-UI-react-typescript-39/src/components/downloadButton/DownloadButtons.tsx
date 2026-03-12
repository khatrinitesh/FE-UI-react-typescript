import { DOWNLOAD_FILES } from "../../constants/constants";
import { useDownloadStore } from "../../store/useDownloadStore";
import { motion } from "framer-motion";

const DownloadButtons = () => {
  const { downloadingId, setDownloading } = useDownloadStore();

  const handleDownload = (id: number, url: string) => {
    setDownloading(id);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = url;
      link.download = "";
      link.click();

      setDownloading(null);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-4 w-64">
      {DOWNLOAD_FILES.map((file) => (
        <motion.button
          key={file.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleDownload(file.id, file.url)}
          className="bg-blue-600 text-white px-4 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          {downloadingId === file.id ? "Downloading..." : file.label}
        </motion.button>
      ))}
    </div>
  );
};

export default DownloadButtons;
