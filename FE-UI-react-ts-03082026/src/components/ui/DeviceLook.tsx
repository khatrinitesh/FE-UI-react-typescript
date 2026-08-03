import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useEffect, useState } from "react";

type DeviceType = "Mobile" | "Tablet" | "Desktop";

function detectDevice(): DeviceType {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  const isMobileUserAgent =
    /android|iphone|ipod|blackberry|windows phone/i.test(userAgent);

  const isTabletUserAgent = /ipad|tablet|playbook|silk/i.test(userAgent);

  if (isTabletUserAgent || (width >= 768 && width < 1024)) {
    return "Tablet";
  }

  if (isMobileUserAgent || width < 768) {
    return "Mobile";
  }
  return "Desktop";
}

const deviceConfig = {
  Mobile: {
    icon: Smartphone,
    message: "You are using a mobile device.",
    color: "bg-emerald-100 text-emerald-600",
  },
  Tablet: {
    icon: Tablet,
    message: "You are using a tablet device.",
    color: "bg-violet-100 text-violet-600",
  },
  Desktop: {
    icon: Monitor,
    message: "You are using a desktop device.",
    color: "bg-blue-100 text-blue-600",
  },
};

export default function DeviceDetector() {
  const [device, setDevice] = useState<DeviceType>("Desktop");
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDeviceInformation = () => {
      setDevice(detectDevice());

      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDeviceInformation();

    window.addEventListener("resize", updateDeviceInformation);

    return () => {
      window.removeEventListener("resize", updateDeviceInformation);
    };
  }, []);

  const config = deviceConfig[device];
  const DeviceIcon = config.icon;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center gap-4">
          <div className={`rounded-xl p-3 ${config.color}`}>
            <DeviceIcon size={28} />
          </div>

          <div>
            <p className="text-sm text-slate-500">Detected device</p>

            <h1 className="text-2xl font-semibold text-slate-900">{device}</h1>
          </div>
        </div>

        <div className="space-y-3 rounded-xl bg-slate-50 p-4">
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Device type</span>
            <span className="font-semibold text-slate-900">{device}</span>
          </div>

          <div className="h-px bg-slate-200" />

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Screen width</span>
            <span className="font-semibold text-slate-900">
              {screenSize.width}px
            </span>
          </div>

          <div className="h-px bg-slate-200" />

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Screen height</span>
            <span className="font-semibold text-slate-900">
              {screenSize.height}px
            </span>
          </div>
        </div>

        <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
          {config.message}
        </p>
      </div>
    </div>
  );
}
