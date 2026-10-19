"use client";

import Link from "next/link";
import { contactConfig } from "@/data/contact";
import { profileNotes, site } from "@/data/profile";
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

export function Footer() {
  const { lang, setLang, t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-ink pb-24 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{lang === "te" ? site.nameTe : site.nameEn}</p>
          <p className="mt-2 text-sm leading-6 text-cream/80">
            {lang === "te" ? site.wardLabelTe : site.wardLabelEn} · {lang === "te" ? site.areaTe : site.areaEn}
          </p>
          <p className="mt-3 text-sm leading-6 text-cream/80">{t.footer.blurb}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2">
            {links.map(([href, key]) => (
              <li key={key}>
                <Link href={href} className="text-sm font-semibold text-sun">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ul className="grid gap-2">
            {contactConfig.phones.map((phone) => (
              <li key={phone.id}>
                <a className="font-bold text-sun" href={`tel:+${phone.e164}`}>
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={() => setLang("te")} className="rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink">
              {t.langTe}
            </button>
            <button type="button" onClick={() => setLang("en")} className="rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink">
              {t.langEn}
            </button>
          </div>
        </div>
      </div>
      <div id="privacy" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm leading-6 text-cream/75">
          <p className="font-bold text-cream">{t.footer.privacyTitle}</p>
          <p>{t.footer.privacy}</p>
          <p className="mt-2">{lang === "te" ? profileNotes.disclaimerTe : profileNotes.disclaimerEn}</p>
          <p className="mt-2">{t.footer.ownership}</p>
          <p className="mt-3">
            © {year} {lang === "te" ? site.nameTe : site.nameEn}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
