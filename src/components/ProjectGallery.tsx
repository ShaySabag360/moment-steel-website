"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  /** Photo paths; the first one is shown initially. */
  images: string[];
  /** Project title (image alt text base). */
  title: string;
  /** Localized word for "photo" (thumbnail aria-label: "{thumbLabel} {n}"). */
  thumbLabel: string;
  /** Eager-load the main image (first project on the page). */
  priority?: boolean;
};

/**
 * Projects page media column: one large 3:2 frame plus a thumbnail strip.
 * Clicking a thumbnail cross-fades the matching photo into the main frame
 * (all photos are stacked in the frame, so the swap never flashes).
 * Projects with a single photo render just the frame.
 */
export default function ProjectGallery({
  images,
  title,
  thumbLabel,
  priority = false,
}: ProjectGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden bg-black">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? title : `${title} ${i + 1}`}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            priority={priority && i === 0}
            aria-hidden={i !== active}
            className={`object-cover transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-2">
          {images.map((src, i) => {
            const isActive = i === active;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={`${thumbLabel} ${i + 1}`}
                className={`relative flex-1 max-w-44 aspect-[4/3] overflow-hidden border-2 transition-opacity duration-200 ${
                  isActive
                    ? "border-[#fd008d] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 12vw, 30vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
