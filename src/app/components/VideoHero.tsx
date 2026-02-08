// src/app/components/VideoHero.tsx
import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  className?: string;
};

export function VideoHero({ src, className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);

  async function safePlay() {
    const v = videoRef.current;
    if (!v) return;

    try {
      await v.play();
    } catch {
      // Autoplay may be blocked until the user interacts.
    }
  }

  useEffect(() => {
    const v = videoRef.current;
    setErrorText(null);
    if (!v) return;

    // Reset playback cleanly when src changes
    try {
      v.pause();
      v.currentTime = 0;
    } catch {
      // ignore
    }

    // ✅ Start muted for autoplay policies (user can unmute via native controls)
    v.muted = true;

    // Reload source (helps with GH Pages caching/range edge cases)
    v.load();

    const t = window.setTimeout(() => {
      void safePlay();
    }, 50);

    return () => window.clearTimeout(t);
  }, [src]);

  function onVideoError() {
    const v = videoRef.current;
    const base = `Video failed to load: ${src}`;

    if (!v) {
      setErrorText(base);
      return;
    }

    const extra = ` (networkState=${v.networkState}, readyState=${v.readyState})`;
    setErrorText(base + extra);
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        // ✅ Standard user controls (progress bar / scrub / etc.)
        controls
        // Optional: hide download + playback speed menu where supported
        controlsList="nodownload noplaybackrate"
        onLoadedMetadata={() => void safePlay()}
        onCanPlay={() => void safePlay()}
        onError={onVideoError}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Error overlay */}
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
