const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p>Modern and responsive websites to make your brand stand out.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p>User-centered design for seamless digital experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold mb-2">Consulting</h3>
          <p>Helping you make the right choices for your online presence.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
