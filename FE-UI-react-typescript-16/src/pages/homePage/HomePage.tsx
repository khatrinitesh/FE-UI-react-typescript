import HeroSection from "../../components/heroSection/HeroSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import ServicesSection from "../../components/servicesSection/ServicesSection";
import PortfolioSection from "../../components/portfolioSection/PortfolioSection";
import ContactSection from "../../components/contactSection/ContactSection";
import ConcatSection from "../../components/concatSection/ConcatSection";
import FieldInput from "../../components/fieldInput/FieldInput";
import { FaUser, FaCheck } from "react-icons/fa";

const HomePage = () => {
  const firstNames = ["Nitesh", "Vishal"];
  const lastNames = ["Khatri", "Shah"];
  const fullNames = firstNames.concat(" ", lastNames);
  return (
    <>
      <FieldInput
        placeholder="Enter your name"
        maxLength={50}
        disabled={false}
        readOnly={false}
        className="custom-input"
        iconBefore={<FaUser />}
        iconAfter={<FaCheck />}
        isLoading={false}
      >
        <span className="hint-text">This is a hint</span>
      </FieldInput>
      {fullNames}
      <ConcatSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
