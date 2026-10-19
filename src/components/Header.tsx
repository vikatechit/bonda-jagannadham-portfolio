"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactConfig } from "@/data/contact";
import { site } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

const links = [
  ["/#home", "home"],
  ["/#about", "about"],
  ["/#works", "works"],
  ["/#service", "service"],
  ["/#activities", "activities"],
  ["/#gallery", "gallery"],
  ["/#contact", "contact"],
] as const;

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const phone = contactConfig.phones[0];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 ${solid ? "shadow-md" : ""}`}>
      <div className="h-1.5 bg-gradient-to-r from-[#ff6a00] via-sun to-leaf" />
      <div className={`border-b border-leaf/20 ${solid ? "bg-cream/95" : "bg-sun/80"} backdrop-blur-md`}>
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
          <Link href="/#home" className="flex shrink-0 items-center gap-3">
            <Image
              src={site.portrait}
              alt={lang === "te" ? "బొండా జగన్నాధం" : "Bonda Jagannadham"}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-leaf object-cover object-top"
              priority
            />
            <span>
              <span className="block font-display text-base leading-tight text-ink sm:text-lg">
                {lang === "te" ? site.nameTe : site.nameEn}
              </span>
              <span className="block text-xs font-semibold text-leaf-dark">
                {lang === "te" ? site.wardLabelTe : site.wardLabelEn}
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map(([href, key]) => (
              <Link
                key={key}
                href={href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-ink hover:bg-white/70"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <div className="flex rounded-full border border-leaf/30 bg-white/70 p-1 text-sm font-bold">
              <button
                type="button"
                onClick={() => setLang("te")}
                className={`rounded-full px-2.5 py-1 ${lang === "te" ? "bg-leaf text-cream" : "text-ink"}`}
                aria-pressed={lang === "te"}
              >
                {t.langTe}
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 ${lang === "en" ? "bg-leaf text-cream" : "text-ink"}`}
                aria-pressed={lang === "en"}
              >
                {t.langEn}
              </button>
            </div>
            <a
              href={`tel:+${phone.e164}`}
              className="hidden items-center gap-1 rounded-full bg-leaf px-3 py-2 text-sm font-bold text-cream sm:inline-flex"
            >
              <Phone size={16} aria-hidden />
              {t.call}
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-b border-leaf/20 bg-cream px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1">
            {links.map(([href, key]) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-sun"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
