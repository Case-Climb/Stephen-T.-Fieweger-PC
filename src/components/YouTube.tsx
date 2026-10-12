"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

/** Click-to-load YouTube embed: no third-party requests until the visitor presses play. */
export default function YouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-gold/30 bg-navy-deep">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${title}`}>
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={`Video thumbnail: ${title}`}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover opacity-80 transition group-hover:opacity-100"
            unoptimized
          />
          <span className="absolute inset-0 bg-navy/40" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition group-hover:scale-105">
            <Icon name="play" className="ml-1 h-8 w-8 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
