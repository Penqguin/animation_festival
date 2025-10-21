import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "/src/utils/Hero.css";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/heroPhotos/1.jpeg",
      title: "Gallery",
      description: "View our gallery.",
      link: "/gallery",
    },
    {
      id: 2,
      image: "/heroPhotos/2.jpg",
      title: "Organizations",
      description: "Look at the organizations who support us.",
      link: "/organizations",
    },
    {
      id: 3,
      image: "/heroPhotos/3.jpg",
      title: "About Us",
      description: "Learn more about our mission.",
      link: "/aboutus",
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_80%] h-200 relative"
              key={index}
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 p-4 transform">
                <h2 className="mb-2 text-xl">{slide.title}</h2>
                <p className="mb-2 text-4xl">{slide.description}</p>
                <a href={slide.link} className="">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-10 h-3 transition-all ${
              index === selectedIndex
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
