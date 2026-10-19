"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { associates, leaders, localLeaders, type Leader } from "@/data/leaders";
import { site } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

function Portrait({ person, large = false }: { person: Leader; large?: boolean }) {
  const { lang } = useLanguage();
  return (
    <figure className="overflow-hidden rounded-3xl border border-leaf/15 bg-cream shadow-sm">
      <div className={`relative bg-sun ${large ? "aspect-[4/5]" : "aspect-square"}`}>
        <Image
          src={person.image}
          alt={lang === "te" ? person.nameTe : person.nameEn}
          fill
          sizes={large ? "(max-width: 768px) 100vw, 360px" : "180px"}
          className={`object-cover ${person.imagePosition ?? "object-top"}`}
        />
      </div>
      <figcaption className="px-3 py-3">
        <p className={`font-display leading-snug ${large ? "text-2xl" : "text-sm"}`}>
          {lang === "te" ? person.nameTe : person.nameEn}
        </p>
        <p className="mt-1 text-sm leading-5 text-leaf-dark">
          {lang === "te" ? person.roleTe : person.roleEn}
        </p>
      </figcaption>
    </figure>
  );
}

export function Leaders() {
  const { lang, t } = useLanguage();
  const reduce = useReducedMotion();
  const palla = localLeaders[0];
  const bonda = localLeaders[1];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6" aria-labelledby="leaders-title">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] border border-white/60 bg-cream/85 p-5 shadow-sm md:p-8"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.leaders.eyebrow}</p>
        <h2 id="leaders-title" className="mt-1 font-display text-3xl md:text-4xl">
          {t.leaders.title}
        </h2>
        <p className="mt-3 max-w-3xl leading-7">{t.leaders.text}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {leaders.map((person) => (
            <Portrait key={person.id} person={person} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <Image
            src="/images/alliance-logo.png"
            alt={t.leaders.symbol}
            width={640}
            height={280}
            className="h-auto w-full max-w-xl"
          />
          <p className="text-sm font-bold text-leaf-dark">{t.leaders.symbol}</p>
        </div>

        <div className="mt-8 grid items-center gap-4 lg:grid-cols-[1fr_0.8fr_1fr]">
          <Portrait person={palla} large />
          <div className="rounded-3xl bg-sun px-5 py-8 text-center">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              {lang === "te" ? site.sloganTe : site.sloganEn}
            </p>
            <p className="mt-4 text-lg font-bold">{lang === "te" ? site.nameTe : site.nameEn}</p>
            <p className="text-sm">{lang === "te" ? site.wardLabelTe : site.wardLabelEn}</p>
          </div>
          <Portrait person={bonda} large />
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl">{t.leaders.associates}</h3>
          <p className="mt-1 text-sm text-ink/75">{t.leaders.unnamed}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {associates.map((person) => (
              <Portrait key={person.id} person={person} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
