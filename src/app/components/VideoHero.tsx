// src/app/components/VideoHero.tsx
import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  className?: string;
};

export function VideoHero({ src, className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Must start muted for autoplay policies
  const [muted, setMuted] = useState(true);

  const [errorText, setErrorText] = useState<string | null>(null);

  async function safePlay() {
    const v = videoRef.current;
    if (!v) return;

    try {
      // If autoplay is allowed, this resolves; otherwise it throws.
      await v.play();
    } catch {
      // If blocked, user can hit Unmute (or interact) and we try again.
    }
  }

  useEffect(() => {
    const v = videoRef.current;
    setErrorText(null);

    if (!v) return;

    // 🔧 Critical for reliability when src changes:
    // - stop any current playback
    // - reset the element
    // - force a fresh load()
    try {
      v.pause();
      v.currentTime = 0;
    } catch {
      // ignore
    }

    // Keep element's actual muted state in sync with React state
    v.muted = muted;

    // Force reload the source (important for GH Pages / caching / range)
    v.load();

    // Attempt playback shortly after load
    const t = window.setTimeout(() => {
      void safePlay();
    }, 50);

    return () => window.clearTimeout(t);
    // NOTE: include muted so reload keeps state consistent when user toggles
  }, [src, muted]);

  function toggleMute() {
    const v = videoRef.current;
    const nextMuted = !muted;

    setMuted(nextMuted);
    if (v) v.muted = nextMuted;

    // If user unmutes, ensure playback continues
    if (!nextMuted) void safePlay();
  }

  function onVideoError() {
    const v = videoRef.current;

    // More useful debug info than just src
    const base = `Video failed to load: ${src}`;
    if (!v) {
      setErrorText(base);
      return;
    }

    // networkState:
    // 0=EMPTY, 1=IDLE, 2=LOADING, 3=NO_SOURCE
    // readyState:
    // 0=HAVE_NOTHING..4=HAVE_ENOUGH_DATA
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
        muted={muted}
        playsInline
        preload="auto"
        // Helps on some browsers: avoid going fullscreen on iOS
        // (playsInline already handles most cases)
        controls={false}
        onLoadedMetadata={() => void safePlay()}
        onCanPlay={() => void safePlay()}
        onError={onVideoError}
      >
        {/* ✅ Explicit type is key for some hosting/MIME edge cases */}
        <source src={src} type="video/mp4" />

        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Audio toggle */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 rounded-full bg-black/40 hover:bg-black/55 text-white px-4 py-2 text-sm font-semibold border border-white/20 backdrop-blur"
      >
        {muted ? "Unmute" : "Mute"}
      </button>

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
