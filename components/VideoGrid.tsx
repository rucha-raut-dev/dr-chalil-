"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  source?: string;
};

// A missing high-res YouTube thumbnail can fail in two different ways:
// 1. YouTube silently returns a tiny 120x90 grey placeholder (loads fine,
//    but is the wrong image) — caught by onLoad checking naturalWidth/Height.
// 2. The maxresdefault.jpg file doesn't exist on YouTube's server at all,
//    so the request itself 404s and onLoad never fires — caught by onError.
// Either case falls back to hqdefault.jpg, which YouTube guarantees for
// every public video.

function VideoThumbnail({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const fallbackSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const [src, setSrc] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <Image
      src={src}
      alt={title}
      fill
      sizes="(max-width: 900px) 100vw, 33vw"
      className="video-img"
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth <= 120 && img.naturalHeight <= 90) {
          setSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setSrc(fallbackSrc);
      }}
    />
  );
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = videos;

  const activeIndex = filtered.findIndex((v) => v.id === activeId);
  const activeVideo = activeIndex >= 0 ? filtered[activeIndex] : null;

  function showPrev() {
    if (activeIndex < 0) return;
    const prev = (activeIndex - 1 + filtered.length) % filtered.length;
    setActiveId(filtered[prev].id);
  }

  function showNext() {
    if (activeIndex < 0) return;
    const next = (activeIndex + 1) % filtered.length;
    setActiveId(filtered[next].id);
  }

  // Keyboard controls while the modal is open
  useEffect(() => {
    if (!activeId) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, activeIndex, filtered]);

  return (
    <>
      <div className="media-grid">
        {filtered.map((video) => (
          <article className="media-card" key={video.id}>
            <button
              type="button"
              className="media-image video-trigger"
              onClick={() => setActiveId(video.id)}
              aria-label={`Play video: ${video.title}`}
            >
              <VideoThumbnail videoId={video.id} title={video.title} />
              <span className="media-image-scrim" />
              <span className="play">
                <Play size={15} fill="currentColor" />
              </span>
            </button>
          </article>
        ))}
      </div>

      {activeVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setActiveId(null)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  className="video-modal-nav video-modal-prev"
                  onClick={showPrev}
                  aria-label="Previous video"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  className="video-modal-nav video-modal-next"
                  onClick={showNext}
                  aria-label="Next video"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <div className="video-modal-frame">
              <iframe
                key={activeVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="video-modal-caption">
              <h3>{activeVideo.title}</h3>
              <span>
                {activeIndex + 1} / {filtered.length}
                {activeVideo.source ? ` · ${activeVideo.source}` : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}