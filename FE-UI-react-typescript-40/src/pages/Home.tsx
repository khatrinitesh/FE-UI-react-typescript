import Clients from "../components/clients/Clients"
import FoundersSection from "../components/founders/FoundersSection"
import HeroSection from "../components/hero/Hero"
import HeroSection1 from "../components/hero/HeroSection"
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs"


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <Clients />
      <FoundersSection/>
      <HeroSection1/>
    </div>
  )
}

export default Home
