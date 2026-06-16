import { useState, useEffect, useRef } from "react";

import img1 from "../../assets/hero/Wings Learn To Skate-1.jpg";
import img2 from "../../assets/hero/Wings Learn To Skate-4.jpg";
import img3 from "../../assets/hero/Wings Learn To Skate-6.jpg";
import img4 from "../../assets/hero/Wings Learn To Skate-7.jpg";
import img5 from "../../assets/hero/Wings Learn To Skate-9.jpg";
import img6 from "../../assets/hero/Wings Learn To Skate-14.jpg";

const IMAGES = [img1, img2, img3, img4, img5, img6];
const INTERVAL_MS = 4000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {IMAGES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Learn to Skate ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
