import { useEffect, useMemo, useState } from "react";

type HeroImage = {
  url: string;
  alt: string;
};

type HeroCarouselProps = {
  images: HeroImage[];
  interval?: number; // ms
  className?: string;
};

export function HeroCarousel({
  images,
  interval = 3000,
  className = "",
}: HeroCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!safeImages.length) return;
    if (safeImages.length === 1) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % safeImages.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [safeImages.length, interval, isPaused]);

  // keep index valid if images array changes
  useEffect(() => {
    if (activeIndex >= safeImages.length) setActiveIndex(0);
  }, [safeImages.length, activeIndex]);

  if (!safeImages.length) {
    return (
      <div
        className={[
          "h-full w-full grid place-items-center bg-white/10 text-white/80",
          className,
        ].join(" ")}
      >
        <span>No images</span>
      </div>
    );
  }

  return (
    <div
      className={["relative h-full w-full", className].join(" ")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label="Hero image carousel"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {safeImages.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <img
              key={`${img.url}-${idx}`}
              src={img.url}
              alt={img.alt}
              className={[
                "absolute inset-0 h-full w-full object-cover",
                "transition-opacity duration-700 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
              draggable={false}
            />
          );
        })}
      </div>

      {/* Bottom gradient for readability */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      {/* Dots */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {safeImages.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={[
                  "h-2.5 w-2.5 rounded-full border border-white/60",
                  "transition-transform duration-150",
                  isActive ? "bg-white scale-110" : "bg-white/20 hover:bg-white/35",
                ].join(" ")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
