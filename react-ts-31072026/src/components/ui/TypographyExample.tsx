export default function TypographyExample() {
  return (
    <section className="typographySection bg-secondary flex flex-col gap-5">
      <div className="container">
        <p className="text-16 font-montserrat ">12px responsive text</p>
        <p className="text-16">16px responsive body text</p>
        <h3 className="text-24">24px responsive heading</h3>
        <h2 className="text-48">48px responsive heading</h2>
        <h1 className="text-80">80px responsive hero title</h1>
      </div>
    </section>
  );
}
