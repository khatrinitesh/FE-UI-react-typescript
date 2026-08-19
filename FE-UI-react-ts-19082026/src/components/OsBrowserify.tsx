import { useEffect, useState } from "react";

interface OSInfo {
  platform: string;
  browser: string;
  userAgent: string;
  language: string;
  online: boolean;
}

function getBrowserName() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg")) {
    return "Microsoft Edge";
  }

  if (userAgent.includes("Chrome")) {
    return "Google Chrome";
  }

  if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  }

  if (userAgent.includes("Safari")) {
    return "Safari";
  }

  if (userAgent.includes("Opera")) {
    return "Opera";
  }

  return "Unknown";
}

function getPlatformName() {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes("win")) {
    return "Windows";
  }

  if (platform.includes("mac")) {
    return "macOS";
  }

  if (platform.includes("linux")) {
    return "Linux";
  }

  if (/android/i.test(navigator.userAgent)) {
    return "Android";
  }

  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
    return "iOS";
  }

  return "Unknown";
}

export default function OsBrowserify() {
  const [osInfo, setOsInfo] = useState<OSInfo | null>(null);

  useEffect(() => {
    setOsInfo({
      platform: getPlatformName(),
      browser: getBrowserName(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      online: navigator.onLine,
    });
  }, []);

  if (!osInfo) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="mb-6 text-3xl font-bold">Browser & OS Information</h1>

        <div className="space-y-4">
          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Operating System</p>
            <p className="mt-1 text-lg font-semibold">{osInfo.platform}</p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Browser</p>
            <p className="mt-1 text-lg font-semibold">{osInfo.browser}</p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Language</p>
            <p className="mt-1 text-lg font-semibold">{osInfo.language}</p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Internet</p>
            <p className="mt-1 text-lg font-semibold">
              {osInfo.online ? "Online" : "Offline"}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">User Agent</p>
            <p className="mt-1 break-all text-sm text-slate-300">
              {osInfo.userAgent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
