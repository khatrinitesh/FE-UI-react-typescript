const About = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          About Us
        </span>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          We build products that make a difference.
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
          We focus on creating simple, meaningful, and reliable digital
          experiences. Our goal is to combine thoughtful design with modern
          technology.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            To create useful products that solve real problems and provide great
            experiences.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Our Vision</h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            To build a trusted product ecosystem focused on innovation,
            simplicity, and quality.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Our Values</h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            We value transparency, creativity, collaboration, and continuous
            improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
