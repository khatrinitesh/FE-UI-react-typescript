import { Carousel } from "./Carousel"

 const carouselData = [
  { id: 1, name: 'Slide 1' },
  { id: 2, name: 'Slide 2' },
  { id: 3, name: 'Slide 3' },
]

export default function EmblaCarouselSection() {
  return (
    <div>
      <Carousel items={carouselData} />
    </div>
  )
}
