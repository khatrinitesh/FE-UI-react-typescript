// @ts-expect-error path-browserify does not ship a TypeScript declaration file.
import path from "path-browserify";

interface FileInfo {
  path: string;
  name: string;
  extension: string;
  directory: string;
}

export default function PathBrowserify() {
  const files = [
    "/assets/images/profile.jpg",
    "/assets/videos/demo.mp4",
    "/assets/documents/resume.pdf",
  ];

  const getFileInfo = (filePath: string): FileInfo => {
    return {
      path: filePath,
      name: path.basename(filePath),
      extension: path.extname(filePath),
      directory: path.dirname(filePath),
    };
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">File Path Information</h1>

        <div className="grid gap-4">
          {files.map((filePath) => {
            const file = getFileInfo(filePath);

            return (
              <div
                key={file.path}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="mb-3 break-all font-medium">{file.path}</p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-slate-500">File Name</p>
                    <p>{file.name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Extension</p>
                    <p>{file.extension}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Directory</p>
                    <p className="break-all">{file.directory}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
