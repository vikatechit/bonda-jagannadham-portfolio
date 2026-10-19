"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { pamphletPages, projects, type ProjectCategory } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatPublishedCost } from "@/lib/formatting";

const categories: Array<ProjectCategory | "all"> = [
  "all",
  "roads",
  "drainage",
  "parks",
  "water",
  "facilities",
  "footpaths",
  "sanitation",
  "other",
];

export function Works() {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [sort, setSort] = useState("default");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = projects.filter((project) => {
      const categoryOk = category === "all" || project.category === category;
      const blob = [
        project.titleTe,
        project.titleEn,
        project.descriptionTe,
        project.descriptionEn,
        project.locationTe,
        project.locationEn,
      ]
        .join(" ")
        .toLowerCase();
      return categoryOk && (!needle || blob.includes(needle));
    });
    const sorted = [...list];
    if (sort === "high") {
      sorted.sort((a, b) => (b.publishedCostINR ?? -1) - (a.publishedCostINR ?? -1));
    } else if (sort === "low") {
      sorted.sort((a, b) => (a.publishedCostINR ?? Number.MAX_SAFE_INTEGER) - (b.publishedCostINR ?? Number.MAX_SAFE_INTEGER));
    } else if (sort === "name") {
      sorted.sort((a, b) =>
        (lang === "te" ? a.titleTe : a.titleEn).localeCompare(lang === "te" ? b.titleTe : b.titleEn, lang),
      );
    }
    return sorted;
  }, [category, lang, query, sort]);

  return (
    <section id="works" className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.works.eyebrow}</p>
      <h2 className="mt-1 font-display text-4xl">{t.works.title}</h2>
      <p className="mt-3 max-w-3xl leading-7">{t.works.text}</p>
      <p className="mt-4 rounded-2xl border border-stamp/30 bg-cream px-4 py-3 text-sm leading-6">{t.works.caution}</p>

      <div className="mt-5 grid gap-3 rounded-3xl bg-cream/90 p-4 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="sr-only">{t.works.search}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.works.search}
            className="w-full rounded-2xl border border-ink/15 px-4 py-3"
          />
        </label>
        <label className="block text-sm font-bold">
          {t.works.sort}
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="mt-1 block w-full rounded-2xl border border-ink/15 bg-white px-3 py-3 font-semibold"
          >
            <option value="default">{t.works.sortDefault}</option>
            <option value="high">{t.works.sortHigh}</option>
            <option value="low">{t.works.sortLow}</option>
            <option value="name">{t.works.sortName}</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${
              category === item ? "bg-ink text-cream" : "bg-cream text-ink"
            }`}
            aria-pressed={category === item}
          >
            {item === "all" ? t.works.all : t.categories[item]}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm font-bold">
        {visible.length}{" "}
        {lang === "en" && visible.length === 1 ? "work" : t.works.count}
      </p>
      <p className="text-sm">{t.works.notSummed}</p>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-3xl bg-cream p-6 font-semibold">{t.works.empty}</p>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl bg-cream shadow-sm">
              <div className="relative aspect-[16/10] bg-sun">
                <Image
                  src={project.images[0]}
                  alt={lang === "te" ? project.titleTe : project.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-sun px-2 py-1">{t.categories[project.category]}</span>
                  <span className="rounded-full bg-stamp px-2 py-1 text-cream">{t.statuses[project.status]}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-snug">
                  {lang === "te" ? project.titleTe : project.titleEn}
                </h3>
                <p className="mt-2 line-clamp-3 leading-7">
                  {lang === "te" ? project.descriptionTe : project.descriptionEn}
                </p>
                <dl className="mt-4 grid gap-1 text-sm">
                  <div>
                    <dt className="inline font-bold">{t.works.location}: </dt>
                    <dd className="inline">{lang === "te" ? project.locationTe : project.locationEn}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">{t.works.cost}: </dt>
                    <dd className="inline">{formatPublishedCost(project.publishedCostINR, lang)}</dd>
                  </div>
                </dl>
                <Link
                  href={`/works/${project.id}`}
                  className="mt-4 inline-flex min-h-11 items-center rounded-full bg-leaf px-4 py-2 font-bold text-cream"
                >
                  {t.works.details}
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-10">
        <h3 className="font-display text-3xl">{t.works.sourcePages}</h3>
        <p className="mt-2 max-w-3xl leading-7">{t.works.sourcePagesText}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {pamphletPages.map((page) => (
            <a key={page.src} href={page.src} target="_blank" rel="noreferrer" className="overflow-hidden rounded-3xl bg-cream shadow-sm">
              <Image
                src={page.src}
                alt={lang === "te" ? page.altTe : page.altEn}
                width={768}
                height={1024}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
