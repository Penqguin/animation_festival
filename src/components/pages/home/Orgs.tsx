// using embla carousel

import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  useMemo,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import "/src/utils/Hero.css";

const ORGS = [
  {
    id: 1,
    name: "Org One",
    description: "A great organization for animators.",
    logo: "/assets/react.svg",
    link: "/organizations/1",
  },
  {
    id: 2,
    name: "Org Two",
    description: "Supporting creative communities.",
    logo: "/assets/vite.svg",
    link: "/organizations/2",
  },
  {
    id: 3,
    name: "Org Three",
    description: "Empowering artists everywhere.",
    logo: "/assets/templogo.png",
    link: "/organizations/3",
  },
];

const AUTO_SCROLL_INTERVAL = 4000; // ms

const Orgs: React.FC = () => {
  // Restore snapping carousel with slide preview effect
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoScrollTimer = useRef<number | null>(null);
  const userInteracted = useRef(false);
  const navigate = useNavigate();

  // memoize commonly used inline style to avoid reallocation each render
  const slideStyle = useMemo<React.CSSProperties>(
    () => ({
      flex: "0 0 84%",
      minWidth: 0,
      marginLeft: "2%",
      marginRight: "2%",
      boxSizing: "border-box",
      maxWidth: "100%",
    }),
    []
  );

  // Auto-scroll logic
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  // Reset timer on interaction
  const resetAutoScroll = useCallback(() => {
    userInteracted.current = true;
    if (autoScrollTimer.current) {
      clearTimeout(autoScrollTimer.current);
    }
    autoScrollTimer.current = setTimeout(() => {
      userInteracted.current = false;
      scrollNext();
    }, AUTO_SCROLL_INTERVAL);
  }, [scrollNext]);

  // Set up auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setTimeout(() => {
      if (!userInteracted.current) scrollNext();
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    };
  }, [emblaApi, selectedIndex, scrollNext]);

  // Listen for user interaction
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      resetAutoScroll();
    };

    // Throttle resetAutoScroll when handling scroll to avoid expensive per-frame work
    let lastScroll = 0;
    const onScrollThrottled = () => {
      const now = Date.now();
      if (now - lastScroll > 150) {
        lastScroll = now;
        resetAutoScroll();
      }
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", resetAutoScroll);
    // Use throttled scroll handler rather than raw scroll
    emblaApi.on("scroll", onScrollThrottled);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", resetAutoScroll);
      emblaApi.off("scroll", onScrollThrottled);
    };
  }, [emblaApi, resetAutoScroll]);

  // Dots navigation
  const scrollTo = useCallback(
    (idx: number) => {
      if (emblaApi) emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: "url('/orgs/orgs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Organizations</h2>
        </div>
        <div className="embla overflow-x-hidden" ref={emblaRef}>
          <div
            className="embla__container flex"
            style={{
              paddingLeft: "8%",
              paddingRight: "8%",
              gap: 0,
              boxSizing: "border-box",
            }}
          >
            {useMemo(
              () =>
                ORGS.map((org) => (
                  <div className="org-slide" key={org.id} style={slideStyle}>
                    <div className="bg-background-primary rounded-xl shadow-lg p-8 flex flex-col items-center h-full max-w-md w-full mx-auto org-card-inner">
                      <img
                        src={org.logo}
                        alt={org.name}
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        className="w-24 h-24 object-contain mb-4 org-img"
                      />
                      <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
                      <p className="text-gray-600 mb-4 text-center">
                        {org.description}
                      </p>
                      <button
                        className="mt-auto px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                        onClick={() => navigate(org.link)}
                      >
                        Visit Page
                      </button>
                    </div>
                  </div>
                )),
              [navigate, slideStyle]
            )}
          </div>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {ORGS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-6 h-2 rounded-full transition-all duration-200 ${
                idx === selectedIndex
                  ? "bg-white scale-110"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to org ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full border transition-all duration-300"
            onClick={() => navigate("/organizations")}
          >
            View All
          </button>
        </div>
        <StyleTweaks />
      </div>
    </section>
  );
};

export default Orgs;

// Tiny stylesheet additions to help with compositing and will-change hints
const StyleTweaks = () => (
  <style>{`
    .org-card-inner, .org-img { will-change: transform, opacity; }
    .org-slide { box-sizing: border-box; }
  `}</style>
);
