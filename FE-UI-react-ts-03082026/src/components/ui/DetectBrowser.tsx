import { Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

type BrowserInfo = {
  name: string;
  version: string;
};

function detectBrowser(): BrowserInfo {
  const userAgent = navigator.userAgent;

  const browsers = [
    { name: "Microsoft Edge", regex: /Edg\/([\d.]+)/ },
    { name: "Opera", regex: /OPR\/([\d.]+)/ },
    { name: "Google Chrome", regex: /Chrome\/([\d.]+)/ },
    { name: "Mozilla Firefox", regex: /Firefox\/([\d.]+)/ },
    { name: "Safari", regex: /Version\/([\d.]+).*Safari/ },
  ];

  for (const browser of browsers) {
    const match = userAgent.match(browser.regex);

    if (match) {
      return {
        name: browser.name,
        version: match[1],
      };
    }
  }

  return {
    name: "Unknown browser",
    version: "Unknown",
  };
}

export default function BrowserDetector() {
  const [browser, setBrowser] = useState<BrowserInfo | null>(null);

  useEffect(() => {
    setBrowser(detectBrowser());
  }, []);

  if (!browser) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <Globe2 size={26} />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Browser detected
            </h1>
            <p className="text-sm text-slate-500">
              Information about your current browser
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-xl bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-slate-500">Browser</span>
            <span className="font-semibold text-slate-900">{browser.name}</span>
          </div>

          <div className="h-px bg-slate-200" />

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-slate-500">Version</span>
            <span className="font-semibold text-slate-900">
              {browser.version}
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          You are using {browser.name} {browser.version}.
        </div>
      </div>
    </div>
  );
}
