import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function VideoHero({ src, poster, className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  // Autoplay on load (muted is required by most browsers)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // ensure autoplay policies are satisfied
    v.muted = true;
    v.volume = 1;

    const attemptPlay = async () => {
      try {
        await v.play();
        setStarted(true);
      } catch {
        // Autoplay may still fail on some browsers until user interacts.
        setStarted(false);
      }
    };

    attemptPlay();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;

    const nextMuted = !muted;
    v.muted = nextMuted;

    // If unmuting, ensure video is playing (some browsers pause on unmute)
    if (!nextMuted) {
      v.play().catch(() => {});
    }

    setMuted(nextMuted);
  };

  const clickToPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setStarted(true)).catch(() => setStarted(false));
  };

  return (
    <div className={["relative h-full w-full", className].join(" ")}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />

      {/* Bottom gradient for readability like your carousel */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      {/* If autoplay fails, show a click-to-play overlay */}
      {!started && (
        <button
          type="button"
          onClick={clickToPlay}
          className="absolute inset-0 grid place-items-center bg-black/20 text-white font-semibold"
          aria-label="Play video"
        >
          <span className="rounded-lg border border-white/40 bg-black/30 px-4 py-2">
            Tap to Play
          </span>
        </button>
      )}

      {/* Mute / Unmute button */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute top-3 right-3 rounded-lg border border-white/30 bg-black/35 px-3 py-2 text-white text-sm font-semibold hover:bg-black/45 transition"
        aria-label={muted ? "Turn audio on" : "Turn audio off"}
      >
        {muted ? "Sound: Off" : "Sound: On"}
      </button>
    </div>
  );
}
