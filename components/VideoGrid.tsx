"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  source?: string;
};

// YouTube doesn't 404 when a high-res thumbnail is missing — it silently
// returns a tiny 120x90 grey placeholder instead. We start with the sharp
// maxresdefault image and, once loaded, check its real size: if it turns
// out to be that placeholder we drop down to hqdefault, which YouTube
// guarantees for every video. This keeps thumbnails sharp when possible
// without ever showing the grey placeholder.
function VideoThumbnail({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
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
          setSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
        }
      }}
    />
  );
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!activeId) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeId]);

  const activeVideo = videos.find((v) => v.id === activeId) || null;

  return (
    <>
      <div className="media-grid">
        {videos.map((video, index) => (
          <article
            className={`media-card ${index === 0 ? "featured" : ""}`}
            key={video.id}
          >
            <button
              type="button"
              className="media-image video-trigger"
              onClick={() => setActiveId(video.id)}
              aria-label={`Play video: ${video.title}`}
            >
              <VideoThumbnail videoId={video.id} title={video.title} />
              <span className="play">
                <Play size={15} fill="currentColor" />
              </span>
            </button>
            <div className="media-title">
              <span>0{index + 1}</span>
              <h3>{video.title}</h3>
            </div>
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
            <div className="video-modal-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}