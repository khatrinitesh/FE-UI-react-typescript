export default function ResponsiveSection() {
  return (
    <section
      className="bg-primary
        p-4
        desktop-sm:p-5
        desktop-md:p-6
        desktop-lg:p-7
        desktop-xl:p-8
        desktop-2xl:p-9
        desktop-3xl:p-10
        desktop-4xl:p-12
        desktop-5xl:p-14
        desktop-6xl:p-16
      "
    >
      <div className="container">
        <h1
          className="
          text-24
          desktop-sm:text-3xl
          desktop-lg:text-4xl
          desktop-3xl:text-5xl
          desktop-4xl:text-6xl
          desktop-6xl:text-7xl font-arialnb
        "
        >
          Responsive Brand Project
        </h1>
      </div>
    </section>
  );
}
