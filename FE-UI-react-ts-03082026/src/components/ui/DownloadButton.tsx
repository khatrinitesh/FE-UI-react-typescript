import { Download } from "lucide-react";
import Assets from "../../utils/assets";

export default function SimpleDownloadButton() {
  return (
    <a
      href={Assets.Pdfs.report}
      download="report.pdf"
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
    >
      <Download size={18} />
      Download
    </a>
  );
}
