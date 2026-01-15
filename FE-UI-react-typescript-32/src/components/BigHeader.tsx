import { useHeaderStore } from "../store/useHeaderStore";

const BigHeader = () => {
  const { content } = useHeaderStore();
  return (
    <header className="relative w-full min-h-[70vh] bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest opacity-80 mb-4">
          {content.subtitle}
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          {content.title}
        </h1>

        <p className="max-w-xl text-lg opacity-90 mb-8">
          {content.description}
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md hover:bg-gray-200 transition">
            {content.primaryCta}
          </button>

          {content.secondaryCta && (
            <button className="px-6 py-3 border border-white/70 rounded-md hover:bg-white/10 transition">
              {content.secondaryCta}
            </button>
          )}
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
    </header>
  );
};

export default BigHeader;
