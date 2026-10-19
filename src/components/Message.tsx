"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Message() {
  const { t } = useLanguage();
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setDraft(window.localStorage.getItem("bonda-message-draft") ?? "");
  }, []);

  return (
    <section id="message" className="mx-auto max-w-6xl px-4 py-8">
      <div className="overflow-hidden rounded-[2rem] border-4 border-sun-deep bg-[#f7ecd2] shadow-sm">
        <div className="h-3 bg-gradient-to-r from-leaf via-sun-deep to-leaf" />
        <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.message.eyebrow}</p>
            <h2 className="mt-1 font-display text-4xl">{t.message.title}</h2>
            <p className="mt-4 leading-8">{t.message.text}</p>
            <p className="mt-6 font-display text-2xl text-leaf-dark">{t.message.sign}</p>
            <label htmlFor="message-draft" className="mt-6 block font-bold">
              {t.message.edit}
            </label>
            <textarea
              id="message-draft"
              value={draft}
              rows={6}
              placeholder={t.message.placeholder}
              onChange={(event) => {
                setDraft(event.target.value);
                window.localStorage.setItem("bonda-message-draft", event.target.value);
              }}
              className="mt-2 w-full rounded-2xl border border-ink/15 bg-white px-3 py-3"
            />
            <p className="mt-2 text-sm">{t.message.editHint}</p>
          </div>
          <Image
            src="/images/brochure/scroll.jpg"
            alt={t.message.title}
            width={768}
            height={1024}
            className="h-auto w-full rounded-2xl border border-ink/10"
          />
        </div>
        <div className="h-3 bg-gradient-to-r from-leaf via-sun-deep to-leaf" />
      </div>
    </section>
  );
}
