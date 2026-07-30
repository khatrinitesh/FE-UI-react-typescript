import { Car, Gauge, MapPin, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const MAX_DISTANCE = 100;

export function CarRunning() {
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(40);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      setDistance((currentDistance) => {
        const movement = speed / 100;

        if (currentDistance + movement >= MAX_DISTANCE) {
          setIsRunning(false);
          return MAX_DISTANCE;
        }

        return currentDistance + movement;
      });
    }, 50);

    return () => window.clearInterval(intervalId);
  }, [isRunning, speed]);

  const handleReset = () => {
    setDistance(0);
    setIsRunning(false);
  };

  const remainingDistance = Math.max(0, Math.round(MAX_DISTANCE - distance));

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-10 font-brand dark:bg-slate-950">
      <div className="w-full max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <header className="flex flex-col justify-between gap-5 border-b border-slate-200 p-6 dark:border-slate-800 sm:flex-row sm:items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-brand-12 text-secondary dark:text-primary">
                Interactive animation
              </span>

              <h1 className="mt-3 text-brand-32 text-secondary dark:text-primary">
                Car Running
              </h1>

              <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
                Control the speed and drive the car to its destination.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsRunning((current) => !current)}
                disabled={distance >= MAX_DISTANCE}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-5 text-brand-14 text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary dark:text-slate-950"
              >
                {isRunning ? (
                  <>
                    <Pause size={18} />
                    Pause
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Start
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset car"
                className="flex size-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:bg-primary/10 hover:text-secondary dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </header>

          <div className="p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-3">
              <StatCard
                icon={<Gauge size={20} />}
                label="Current speed"
                value={`${speed} km/h`}
              />

              <StatCard
                icon={<MapPin size={20} />}
                label="Distance covered"
                value={`${Math.round(distance)} km`}
              />

              <StatCard
                icon={<Car size={20} />}
                label="Distance remaining"
                value={`${remainingDistance} km`}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl bg-sky-100 dark:bg-slate-950">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-x-0 bottom-24 h-24 bg-emerald-200 dark:bg-emerald-950" />

                <div className="absolute bottom-24 left-[8%] h-20 w-3 rounded-t-full bg-amber-700">
                  <span className="absolute -left-8 -top-8 size-16 rounded-full bg-emerald-500" />
                </div>

                <div className="absolute bottom-24 right-[10%] h-20 w-3 rounded-t-full bg-amber-700">
                  <span className="absolute -left-8 -top-8 size-16 rounded-full bg-emerald-500" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-slate-700">
                  <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 gap-8 overflow-hidden">
                    {Array.from({ length: 14 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-1.5 min-w-16 rounded-full bg-white/70"
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="absolute bottom-12 z-10 -translate-x-1/2 transition-[left] duration-100 ease-linear"
                  style={{
                    left: `${Math.max(6, Math.min(distance, 94))}%`,
                  }}
                >
                  <div className={isRunning ? "animate-bounce" : ""}>
                    <Car
                      size={72}
                      strokeWidth={1.7}
                      className="fill-primary text-secondary drop-shadow-lg dark:text-primary"
                    />
                  </div>
                </div>

                <div className="absolute bottom-24 right-5 flex flex-col items-center">
                  <div className="rounded-lg bg-white px-3 py-2 text-brand-12 text-secondary shadow-lg dark:bg-slate-900 dark:text-primary">
                    Destination
                  </div>

                  <div className="h-16 w-1 bg-secondary dark:bg-primary" />

                  <div className="size-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900" />
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="car-speed"
                    className="text-brand-16 text-secondary dark:text-primary"
                  >
                    Car speed
                  </label>

                  <p className="mt-1 text-brand-12 text-slate-500 dark:text-slate-400">
                    Increase the speed to move the car faster.
                  </p>
                </div>

                <span className="rounded-xl bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
                  {speed} km/h
                </span>
              </div>

              <input
                id="car-speed"
                type="range"
                min="10"
                max="100"
                step="10"
                value={speed}
                onChange={(event) => setSpeed(Number(event.target.value))}
                className="mt-6 w-full accent-[#1c6956]"
              />
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-brand-12 text-slate-500 dark:text-slate-400">
                <span>Journey progress</span>
                <span>{Math.round(distance)}%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-100"
                  style={{ width: `${distance}%` }}
                />
              </div>
            </div>

            {distance >= MAX_DISTANCE && (
              <div className="mt-6 rounded-2xl border border-primary/40 bg-primary/10 p-5 text-center">
                <h2 className="text-brand-20 text-secondary dark:text-primary">
                  Destination reached!
                </h2>

                <p className="mt-2 text-brand-14 text-slate-600 dark:text-slate-300">
                  The car completed the 100 km journey.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-secondary dark:text-primary">
        {icon}
      </div>

      <p className="mt-4 text-brand-12 text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-brand-20 text-secondary dark:text-primary">
        {value}
      </p>
    </article>
  );
}
