import { WHY_CHOOSE_DATA } from "../../constants/whyChooseData"
import WhyCard from "./WhyCard"


const WhyChooseUs = () => {
  return (
     <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b4a8b] mb-14">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {WHY_CHOOSE_DATA.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
