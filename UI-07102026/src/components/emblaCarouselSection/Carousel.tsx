import useEmblaCarousel from 'embla-carousel-react';


interface CarouselProps {
  items: { id: number; name: string }[]
}

export function Carousel({items}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
})

return (
     <>
        <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
                {items.map((item) => (
                <div
                    key={item.id}
                    className="min-w-0 flex-[0_0_100%]"
                >
                    {item.name}
                </div>
                ))}
            </div>
        </div>

        <div className="mt-4 flex gap-2">
            <button onClick={() => emblaApi?.scrollPrev()}>
                Previous
            </button>

            <button onClick={() => emblaApi?.scrollNext()}>
                Next
            </button>
        </div>
    </>
    )
}

