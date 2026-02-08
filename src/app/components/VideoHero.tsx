// src/app/components/VideoHero.tsx
import { useEffect, useRef, useState } from "react";

type VideoHeroProps = {
  src: string;
  className?: string;
};

function FullscreenExpandIcon() {
  // Two diagonal arrows (outwards), similar to your screenshot
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* top-left arrow */}
      <path d="M9 3H3v6" />
      <path d="M3 3l7 7" />

      {/* bottom-right arrow */}
      <path d="M15 21h6v-6" />
      <path d="M21 21l-7-7" />
    </svg>
  );
}

function FullscreenExitIcon() {
  // Two diagonal arrows (inwards) for exit state
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* top-left inward */}
      <path d="M9 3v6H3" />
      <path d="M3 9l7-7" />

      {/* bottom-right inward */}
      <path d="M15 21v-6h6" />
      <path d="M21 15l-7 7" />
    </svg>
  );
}

export function VideoHero({ src, className = "" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Must start muted for autoplay policies
  const [muted, setMuted] = useState(true);

  const [errorText, setErrorText] = useState<string | null>(null);

  // Fullscreen state (kept in sync via fullscreenchange listener)
  const [isFullscreen, setIsFullscreen] = useState(false);

  async function safePlay() {
    const v = videoRef.current;
    if (!v) return;

    try {
      await v.play();
    } catch {
      // Autoplay may be blocked; user interaction will allow play.
    }
  }

  useEffect(() => {
    const v = videoRef.current;
    setErrorText(null);

    if (!v) return;

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

    const t = window.setTimeout(() => {
      void safePlay();
    }, 50);

    return () => window.clearTimeout(t);
  }, [src, muted]);

  // Keep fullscreen state synced (covers ESC exit, browser UI exit, etc.)
  useEffect(() => {
    function syncFullscreenState() {
      const d = document as Document & {
        webkitFullscreenElement?: Element | null;
      };

      const fsEl = document.fullscreenElement ?? d.webkitFullscreenElement ?? null;
      setIsFullscreen(!!fsEl);
    }

    document.addEventListener("fullscreenchange", syncFullscreenState);
    document.addEventListener("webkitfullscreenchange" as any, syncFullscreenState);

    syncFullscreenState();

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      document.removeEventListener("webkitfullscreenchange" as any, syncFullscreenState);
    };
  }, []);

  function toggleMute() {
    const v = videoRef.current;
    const nextMuted = !muted;

    setMuted(nextMuted);
    if (v) v.muted = nextMuted;

    if (!nextMuted) void safePlay();
  }

  async function requestFullscreen() {
    const container = containerRef.current;
    const v = videoRef.current;
    if (!container || !v) return;

    // iOS Safari: native fullscreen player for <video>
    const anyVideo = v as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (typeof anyVideo.webkitEnterFullscreen === "function") {
      try {
        anyVideo.webkitEnterFullscreen();
        setIsFullscreen(true);
        return;
      } catch {
        // fall through
      }
    }

    const anyEl = container as HTMLDivElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
    };

    try {
      if (container.requestFullscreen) {
        await container.requestFullscreen();
        return;
      }
      if (typeof anyEl.webkitRequestFullscreen === "function") {
        await anyEl.webkitRequestFullscreen();
        return;
      }
    } catch {
      // ignore
    }
  }

  async function exitFullscreen() {
    const d = document as Document & { webkitExitFullscreen?: () => Promise<void> | void };

    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        return;
      }
      if (typeof d.webkitExitFullscreen === "function") {
        await d.webkitExitFullscreen();
        return;
      }
    } catch {
      // ignore
    }
  }

  async function toggleFullscreen() {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await requestFullscreen();
    }
  }

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
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        // ✅ Standard user controls (includes progress bar / scrub)
        controls
        // ✅ Helps avoid iOS forcing fullscreen when controls are shown
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
