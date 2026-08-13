export default function HeroHighlight() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <h1 className="text-center font-brand-bebas-regular text-48 leading-none">
        BUILD{" "}
        <span className="relative inline-block">
          <span className="relative z-10">SOMETHING</span>

          <span
            className="
              absolute
              bottom-[5%]
              left-0
              -z-0
              h-[35%]
              w-full
              origin-left
              scale-x-0
              rounded-sm
              bg-brand-primary
              animate-[scaleX_0.8s_ease-out_0.3s_forwards]
            "
          />
        </span>{" "}
        AMAZING
      </h1>
    </section>
  );
}
