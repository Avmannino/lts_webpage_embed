// src/app/components/VideoHero.tsx
import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  className?: string;
};

export function VideoHero({ src, className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true); // ✅ must start muted for autoplay
  const [errorText, setErrorText] = useState<string | null>(null);

  async function safePlay() {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
    } catch {
      // Autoplay can still be blocked in edge cases; user can unmute/try again.
    }
  }

  useEffect(() => {
    setErrorText(null);
    // small delay helps after navigation/render
    const t = window.setTimeout(() => void safePlay(), 50);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;

    const nextMuted = !muted;
    setMuted(nextMuted);
    v.muted = nextMuted;

    // If user unmutes, ensure it’s playing
    if (!nextMuted) void safePlay();
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        onLoadedMetadata={() => void safePlay()}
        onError={() => setErrorText(`Video failed to load: ${src}`)}
      />

      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 rounded-full bg-black/40 hover:bg-black/55 text-white px-4 py-2 text-sm font-semibold border border-white/20 backdrop-blur"
      >
        {muted ? "Unmute" : "Mute"}
      </button>

      {errorText ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="max-w-[92%] text-center text-white text-sm">
            <div className="font-bold mb-2">Video error</div>
            <div className="break-all opacity-90">{errorText}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
