"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryPhoto = [string, string]; // [src, alt]

export default function GalleryGrid({ gallery }: { gallery: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const active = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <>
      <div className="gallery-grid">
        {gallery.map(([image, alt], index) => (
          <button
            type="button"
            className="gallery-item"
            key={image}
            onClick={() => setActiveIndex(index)}
            aria-label={`View photo: ${alt}`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"
              className="gallery-img"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="image-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active[1]}
        >
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={close}
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              className="image-modal-nav image-modal-prev"
              onClick={showPrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="image-modal-frame">
              <Image
                src={active[0]}
                alt={active[1]}
                fill
                sizes="90vw"
                className="image-modal-img"
              />
            </div>

            <button
              type="button"
              className="image-modal-nav image-modal-next"
              onClick={showNext}
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            <p className="image-modal-caption">{active[1]}</p>
          </div>
        </div>
      )}
    </>
  );
}
