"use client";

import { useEffect, useState } from "react";
import { profileNotes } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { lang, t } = useLanguage();
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setDraft(window.localStorage.getItem("bonda-bio-draft") ?? "");
  }, []);

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.about.eyebrow}</p>
      <h2 className="mt-1 font-display text-4xl">{t.about.title}</h2>
      <p className="mt-4 max-w-3xl text-lg leading-8">
        {lang === "te" ? profileNotes.introTe : profileNotes.introEn}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl bg-cream p-5 shadow-sm">
          <h3 className="font-display text-2xl">{t.about.philosophy}</h3>
          <p className="mt-3 leading-7">{lang === "te" ? profileNotes.philosophyTe : profileNotes.philosophyEn}</p>
        </article>
        <article className="rounded-3xl bg-cream p-5 shadow-sm">
          <h3 className="font-display text-2xl">{t.about.priorities}</h3>
          <ul className="mt-3 grid gap-2">
            {t.about.prioritiesList.map((item) => (
              <li key={item} className="rounded-2xl bg-sun/70 px-3 py-2 font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl bg-cream p-5 shadow-sm">
          <h3 className="font-display text-2xl">{t.about.area}</h3>
          <p className="mt-3 leading-7">{lang === "te" ? profileNotes.areaTe : profileNotes.areaEn}</p>
        </article>
        <article className="rounded-3xl bg-cream p-5 shadow-sm">
          <h3 className="font-display text-2xl">{t.about.record}</h3>
          <p className="mt-3 leading-7">{lang === "te" ? profileNotes.recordTe : profileNotes.recordEn}</p>
        </article>
      </div>

      <article id="service" className="mt-4 rounded-3xl border-2 border-leaf/30 bg-leaf px-5 py-6 text-cream">
        <p className="text-sm font-bold uppercase tracking-wide text-sun">{t.service.eyebrow}</p>
        <h2 className="mt-1 font-display text-3xl">{t.service.title}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {t.service.items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/10 p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 leading-7 text-cream/95">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 leading-7 text-cream/90">
          {lang === "te" ? profileNotes.electionTe : profileNotes.electionEn}
        </p>
      </article>

      <article className="mt-4 rounded-3xl bg-cream p-5 shadow-sm">
        <h3 className="font-display text-2xl">{t.about.gapTitle}</h3>
        <p className="mt-2 leading-7">{lang === "te" ? profileNotes.gapTe : profileNotes.gapEn}</p>
        <label className="mt-4 block text-sm font-bold" htmlFor="bio-draft">
          {t.about.gapTitle}
        </label>
        <textarea
          id="bio-draft"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            window.localStorage.setItem("bonda-bio-draft", event.target.value);
          }}
          rows={4}
          className="mt-2 w-full rounded-2xl border border-ink/15 bg-white px-3 py-3"
          placeholder={t.about.gapHint}
        />
        <p className="mt-2 text-sm text-ink/70">{t.about.gapHint}</p>
      </article>
    </section>
  );
}
