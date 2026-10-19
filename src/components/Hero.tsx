"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { lang, t } = useLanguage();
  const reduce = useReducedMotion();
  const name = lang === "te" ? site.nameTe : site.nameEn;
  const other = lang === "te" ? site.nameEn : site.nameTe;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex rounded-full border border-leaf/30 bg-cream/80 px-3 py-1 text-sm font-bold text-leaf-dark">
            {t.hero.kicker}
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-6xl">{name}</h1>
          <p className="mt-2 text-xl font-semibold text-ink/80">{other}</p>
          <p className="mt-5 max-w-xl rounded-2xl border-l-4 border-stamp bg-cream/80 px-4 py-3 text-lg font-semibold">
            {lang === "te" ? site.sloganTe : site.sloganEn}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8">{t.hero.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/#works"
              className="inline-flex min-h-12 items-center rounded-full bg-leaf px-5 py-3 font-bold text-cream shadow-sm"
            >
              {t.hero.primary}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-ink bg-cream px-5 py-3 font-bold"
            >
              {t.hero.secondary}
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-ink/80">{t.hero.note}</p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-3 top-8 h-full w-full rounded-[2rem] bg-leaf" />
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border-4 border-sun-deep" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream bg-sun shadow-xl">
            <Image
              src={site.portrait}
              alt={name}
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <p className="relative mt-4 rounded-full bg-ink px-4 py-2 text-center text-sm font-bold text-cream">
            {lang === "te" ? site.wardLabelTe : site.wardLabelEn} · {lang === "te" ? site.areaTe : site.areaEn}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
