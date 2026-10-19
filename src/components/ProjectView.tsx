"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatPublishedCost } from "@/lib/formatting";

export function ProjectView({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/#works" className="font-bold text-leaf-dark">
        {t.detail.back}
      </Link>
      <p className="mt-4 text-sm font-bold text-stamp-dark">{t.categories[project.category]}</p>
      <h1 className="mt-1 font-display text-4xl leading-tight">
        {lang === "te" ? project.titleTe : project.titleEn}
      </h1>
      <p className="mt-2 text-lg text-ink/70">{lang === "te" ? project.titleEn : project.titleTe}</p>
      <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-3xl bg-sun">
        <Image
          src={project.images[0]}
          alt={lang === "te" ? project.titleTe : project.titleEn}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>
      <p className="mt-6 text-lg leading-8">{lang === "te" ? project.descriptionTe : project.descriptionEn}</p>
      <dl className="mt-6 grid gap-3 rounded-3xl bg-cream p-5 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-bold">{t.works.location}</dt>
          <dd>{lang === "te" ? project.locationTe : project.locationEn}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">{t.works.cost}</dt>
          <dd>{formatPublishedCost(project.publishedCostINR, lang)}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">{t.works.status}</dt>
          <dd>{t.statuses[project.status]}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">{t.detail.date}</dt>
          <dd>{project.date ?? t.detail.none}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">{t.detail.source}</dt>
          <dd>{project.source}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">{t.detail.verified}</dt>
          <dd>{project.verified ? t.detail.yes : t.detail.no}</dd>
        </div>
      </dl>
      <p className="mt-4 rounded-2xl bg-sun px-4 py-3 text-sm leading-6">
        {lang === "te" ? project.reviewNoteTe : project.reviewNoteEn}
      </p>
    </article>
  );
}
