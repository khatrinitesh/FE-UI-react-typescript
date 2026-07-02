import CardHoverEffect from "./CardHoverEffect";

const cards = [
  {
    title: "Web Design",
    description: "Beautiful responsive layouts with modern UI effects.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "App Design",
    description: "Smooth mobile-first interfaces with clean animations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  },
  {
    title: "Branding",
    description: "Creative visual identity and digital brand experience.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
]

export default function CardHoverEffectSection() {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="mb-8">
          <CardHoverEffect key={card.title} {...card}     />
        </div>
      ))}   
    </>
  )
}
