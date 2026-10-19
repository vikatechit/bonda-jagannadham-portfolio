"use client";

import Image from "next/image";
import { activities } from "@/data/activities";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Activities() {
  const { lang, t } = useLanguage();
  return (
    <section id="activities" className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.activities.eyebrow}</p>
      <h2 className="mt-1 font-display text-4xl">{t.activities.title}</h2>
      <p className="mt-3 max-w-3xl leading-7">{t.activities.text}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl bg-cream shadow-sm">
            <div className="relative aspect-[4/3] bg-sun">
              <Image
                src={item.image}
                alt={lang === "te" ? item.titleTe : item.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-2xl">{lang === "te" ? item.titleTe : item.titleEn}</h3>
              <p className="mt-2 leading-7">{lang === "te" ? item.captionTe : item.captionEn}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
