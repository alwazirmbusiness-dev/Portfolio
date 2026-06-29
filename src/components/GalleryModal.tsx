"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  images: string[];
  title?: string;
  onClose: () => void;
};

export default function GalleryModal({ open, images, title, onClose }: Props) {
  const [idx, setIdx] = useState(0);

  if (!open) return null;

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-head">
          <strong>{title || "Screenshots"}</strong>
          <button className="btn-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="gallery-body">
          <button className="nav prev" onClick={prev} aria-label="Previous">‹</button>
          <img src={images[idx]} alt={`screenshot-${idx + 1}`} />
          <button className="nav next" onClick={next} aria-label="Next">›</button>
        </div>
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={`thumb ${i === idx ? "active" : ""}`}
              onClick={() => setIdx(i)}
            >
              <img src={src} alt={`thumb-${i + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:1000}
        .gallery-modal{background:#0b1220;color:#fff;max-width:900px;width:95%;border-radius:12px;overflow:hidden}
        .gallery-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}
        .btn-close{background:transparent;border:0;color:#fff;font-size:20px;cursor:pointer}
        .gallery-body{display:flex;align-items:center;justify-content:center;padding:8px 16px}
        .gallery-body img{max-width:100%;max-height:60vh;border-radius:6px}
        .nav{background:transparent;border:0;color:#fff;font-size:36px;cursor:pointer;padding:8px}
        .gallery-thumbs{display:flex;gap:8px;overflow:auto;padding:8px 12px;background:#06101a}
        .thumb{border:0;background:transparent;padding:0;cursor:pointer;opacity:0.7}
        .thumb.active{opacity:1}
        .thumb img{height:48px;border-radius:4px}
      `}</style>
    </div>
  );
}
