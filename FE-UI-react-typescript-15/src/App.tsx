import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
