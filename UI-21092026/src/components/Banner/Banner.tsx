import type { ReactNode } from "react";

type BannerProps = { title: string; description?: string; image?: string; action?: ReactNode; className?: string };

export function Banner({ title, description, image, action, className = "" }: BannerProps) {
  return (
    <section className={`relative overflow-hidden rounded-2xl bg-neutral-950 px-6 py-10 text-white md:px-10 md:py-14 ${className}`}>
      {image && <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-40" />}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-300 md:text-base">{description}</p>}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </section>
  );
}
