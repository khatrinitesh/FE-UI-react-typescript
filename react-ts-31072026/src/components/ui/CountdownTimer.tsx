import { Clock3 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetDate: string | Date;
  title?: string;
  onComplete?: () => void;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const total = Math.max(targetDate.getTime() - Date.now(), 0);

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

export default function CountdownTimer({
  targetDate,
  title = "Launching soon",
  onComplete,
}: CountdownTimerProps) {
  const resolvedTargetDate = useMemo(() => new Date(targetDate), [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(resolvedTargetDate),
  );

  const [isCompleted, setIsCompleted] = useState(
    resolvedTargetDate.getTime() <= Date.now(),
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(resolvedTargetDate));
    setIsCompleted(resolvedTargetDate.getTime() <= Date.now());

    const interval = window.setInterval(() => {
      const nextTimeLeft = calculateTimeLeft(resolvedTargetDate);

      setTimeLeft(nextTimeLeft);

      if (nextTimeLeft.total <= 0) {
        setIsCompleted(true);
        window.clearInterval(interval);
        onComplete?.();
      }
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [resolvedTargetDate, onComplete]);

  const timerItems = [
    {
      label: "Days",
      value: timeLeft.days,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <section className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="relative overflow-hidden bg-secondary px-5 py-8 text-white desktop-sm:px-10 desktop-sm:py-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-500/15 blur-[110px]" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Clock3 size={24} aria-hidden="true" />
            </span>

            <div>
              <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
                Countdown
              </p>

              <h1 className="mt-1 font-arialnb text-32 font-bold">{title}</h1>
            </div>
          </div>

          {isCompleted ? (
            <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
              <p className="font-arialnb text-28 font-bold text-emerald-300">
                Countdown completed
              </p>

              <p className="mt-2 font-montserrat text-14 text-white/65">
                The scheduled date and time have been reached.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {timerItems.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-md desktop-sm:p-6"
                >
                  <p className="font-arialnb text-40 font-bold leading-none text-white desktop-sm:text-48">
                    {formatNumber(item.value)}
                  </p>

                  <p className="mt-3 font-montserrat text-12 font-semibold uppercase tracking-[0.12em] text-white/50">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-montserrat text-12 text-white/50">
              Countdown ends on
            </p>

            <p className="font-montserrat text-14 font-semibold text-white">
              {resolvedTargetDate.toLocaleString("en-IN", {
                dateStyle: "long",
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
