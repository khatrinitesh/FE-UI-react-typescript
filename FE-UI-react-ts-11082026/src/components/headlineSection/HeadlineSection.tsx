const words = ["Create", "Something", "Amazing"];

export default function HeadlineSection() {
  return (
    <h1 className="flex flex-wrap gap-x-3 overflow-hidden text-5xl font-brand-bebas-regular">
      {words.map((word, index) => (
        <span
          key={word}
          className="inline-block animate-headline-word"
          style={{
            animationDelay: `${index * 0.15}s`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
