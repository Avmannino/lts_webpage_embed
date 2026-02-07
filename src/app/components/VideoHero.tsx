import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  poster?: string;
  className?: string;

  /** Optional: start muted (recommended true for autoplay) */
  defaultMuted?: boolean;

  /** Optional: show/hide the audio toggle button */
  showAudioToggle?: boolean;
};

export function VideoHero({
  src,
  poster,
  className = "",
  defaultMuted = true,
  showAudioToggle = true,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [muted, setMuted] = useState<boolean>(defaultMuted);
  const [error, setError] = useState<string | null>(null);

  // Try to start playback (safe to call multiple times)
  const tryPlay = async () => {
    const el = videoRef.current;
    if (!el) return;

    try {
      // Autoplay reliability: start muted
      el.muted = true;

      const p = el.play();
      if (p && typeof (p as Promise<void>).then === "function") {
        await p;
      }
      setError(null);
    } catch {
      // Autoplay can be blocked; we'll retry on first user gesture.
      setError("autoplay-blocked");
    }
  };

  // Keep the DOM video muted state in sync with our UI state
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = muted;

    // If user unmutes, ensure playback continues (some browsers pause on audio change)
    if (!muted) {
      el.volume = 1;
      el.play().catch(() => {
        // If play fails, user can tap again; we don't hard-fail.
      });
    }
  }, [muted]);

  useEffect(() => {
    // Reset any prior errors when src changes
    setError(null);

    // Ensure we start muted for autoplay
    setMuted(true);

    // Kick off load + play attempt
    tryPlay();

    // If autoplay is blocked, try again on the first user gesture
    const onFirstUserGesture = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstUserGesture);
      window.removeEventListener("touchstart", onFirstUserGesture);
      window.removeEventListener("keydown", onFirstUserGesture);
    };

    window.addEventListener("pointerdown", onFirstUserGesture, { once: true });
    window.addEventListener("touchstart", onFirstUserGesture, { once: true });
    window.addEventListener("keydown", onFirstUserGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstUserGesture);
      window.removeEventListener("touchstart", onFirstUserGesture);
      window.removeEventListener("keydown", onFirstUserGesture);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onError={() => setError("load-or-decode-failed")}
      />

      {/* Audio toggle (user-controlled) */}
      {showAudioToggle ? (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="
            absolute bottom-3 right-3 z-20
            rounded-full border border-white/30
            bg-black/40 backdrop-blur-sm
            px-4 py-2
            text-white text-sm font-semibold
            hover:bg-black/55 transition
          "
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      ) : null}

      {/* Only show message if the file fails to load/decode */}
      {error === "load-or-decode-failed" ? (
        <div className="absolute inset-0 z-10 grid place-items-center bg-black/45 text-white text-sm px-4 text-center">
          Video failed to load. Check the file path and format (H.264 MP4).
        </div>
      ) : null}
    </div>
  );
}
