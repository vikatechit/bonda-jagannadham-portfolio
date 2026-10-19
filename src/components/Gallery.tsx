"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { gallery, type GalleryItem } from "@/data/gallery";
import { useLanguage } from "@/i18n/LanguageProvider";

const filters = ["all", "portraits", "development", "meetings", "community", "pamphlet"] as const;

export function Gallery() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((item) => item.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (active == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index == null ? index : (index + 1) % items.length));
      if (event.key === "ArrowLeft") {
        setActive((index) => (index == null ? index : (index - 1 + items.length) % items.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  const current: GalleryItem | null = active == null ? null : items[active];

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.gallery.eyebrow}</p>
      <h2 className="mt-1 font-display text-4xl">{t.gallery.title}</h2>
      <p className="mt-3 max-w-3xl leading-7">{t.gallery.text}</p>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${
              filter === item ? "bg-ink text-cream" : "bg-cream"
            }`}
          >
            {t.gallery[item]}
          </button>
        ))}
      </div>
      <div className="mt-5 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className="mb-4 block w-full overflow-hidden rounded-3xl bg-cream text-left shadow-sm"
          >
            <Image
              src={item.src}
              alt={lang === "te" ? item.altTe : item.altEn}
              width={800}
              height={1000}
              loading="lazy"
              className="h-auto w-full"
            />
            <span className="block px-3 py-3 text-sm font-semibold">
              {lang === "te" ? item.captionTe : item.captionEn}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lang === "te" ? current.altTe : current.altEn}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-cream p-3"
            onClick={() => setActive(null)}
            aria-label={t.gallery.close}
          >
            <X />
          </button>
          <button
            type="button"
            className="absolute left-3 rounded-full bg-cream p-3 md:left-6"
            onClick={() => setActive((index) => (index == null ? index : (index - 1 + items.length) % items.length))}
            aria-label={t.gallery.prev}
          >
            <ChevronLeft />
          </button>
          <figure className="max-h-[85vh] max-w-5xl">
            <Image
              src={current.src}
              alt={lang === "te" ? current.altTe : current.altEn}
              width={1200}
              height={1400}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-cream">
              {lang === "te" ? current.captionTe : current.captionEn}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 rounded-full bg-cream p-3 md:right-6"
            onClick={() => setActive((index) => (index == null ? index : (index + 1) % items.length))}
            aria-label={t.gallery.next}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
