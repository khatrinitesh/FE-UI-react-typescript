import CarouselImport from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


const Carousel = (CarouselImport as any).default ?? CarouselImport

const items = [
  { id: 1, name: 'React' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Tailwind CSS' },
  { id: 4, name: 'GSAP' },
  { id: 5, name: 'Framer Motion' },
  { id: 6, name: 'Next.js' },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}


export function ReactMultiCarouselSection() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        showDots={true}
      >
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className="rounded-xl border p-8 text-center">
              {item.name}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}