"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { contactConfig, whatsappHref } from "@/data/contact";
import { useLanguage } from "@/i18n/LanguageProvider";
import { categories, enquirySchema, type EnquiryInput } from "@/lib/validation";

export function Contact() {
  const { lang, t } = useLanguage();
  const [state, setState] = useState<"idle" | "checked" | "error">("idle");
  const [wa, setWa] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      neighborhood: "",
      category: "road",
      message: "",
      consent: false,
      company: "",
    },
  });

  const onSubmit = async (values: EnquiryInput) => {
    setState("idle");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        setState("error");
        return;
      }
      const greeting =
        lang === "te"
          ? "నమస్కారం, బొండా జగన్నాధం గారి వెబ్‌సైట్ నుంచి వినతి."
          : "Hello, an enquiry from Bonda Jagannadham’s website.";
      const text = [
        greeting,
        values.name,
        values.phone,
        values.neighborhood,
        t.formCategories[values.category],
        values.message,
      ]
        .filter(Boolean)
        .join("\n");
      setWa(whatsappHref(text));
      setState("checked");
    } catch {
      setState("error");
    }
  };

  const preset = whatsappHref(
    lang === "te"
      ? "నమస్కారం, నేను బొండా జగన్నాధం గారి వెబ్‌సైట్ నుంచి సంప్రదిస్తున్నాను."
      : "Hello, I am contacting you from Bonda Jagannadham’s website.",
  );

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-sm font-bold uppercase tracking-wide text-stamp-dark">{t.contact.eyebrow}</p>
      <h2 className="mt-1 font-display text-4xl">{t.contact.title}</h2>
      <p className="mt-3 max-w-3xl leading-7">{t.contact.text}</p>
      <p className="mt-2 text-sm font-semibold">
        {lang === "te" ? contactConfig.sourceNoteTe : contactConfig.sourceNoteEn}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-ink p-5 text-cream">
          <ul className="grid gap-3">
            {contactConfig.phones.map((phone) => (
              <li key={phone.id}>
                <a href={`tel:+${phone.e164}`} className="text-2xl font-bold text-sun">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={preset}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-12 items-center rounded-full bg-leaf px-4 py-3 font-bold text-cream"
          >
            {t.contact.whatsapp}
          </a>
          <p className="mt-4 text-sm leading-6 text-cream/80">{t.contact.privacy}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-cream p-5 shadow-sm" noValidate>
          <h3 className="font-display text-2xl">{t.contact.formTitle}</h3>
          <div className="mt-4 grid gap-3">
            <Field label={t.contact.name} error={errors.name?.message ? t.errors[errors.name.message as "name"] : ""}>
              <input {...register("name")} className={fieldClass} autoComplete="name" />
            </Field>
            <Field label={t.contact.phone} error={errors.phone?.message ? t.errors.phone : ""}>
              <input {...register("phone")} className={fieldClass} inputMode="tel" autoComplete="tel" />
            </Field>
            <Field
              label={t.contact.neighborhood}
              error={errors.neighborhood?.message ? t.errors.neighborhood : ""}
            >
              <input {...register("neighborhood")} className={fieldClass} />
            </Field>
            <Field label={t.contact.category} error={errors.category?.message ? t.errors.category : ""}>
              <select {...register("category")} className={fieldClass}>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {t.formCategories[item]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.contact.message} error={errors.message?.message ? t.errors.message : ""}>
              <textarea {...register("message")} rows={4} className={fieldClass} />
            </Field>
            <label className="flex items-start gap-2 text-sm leading-6">
              <input type="checkbox" {...register("consent")} className="mt-1" />
              <span>{t.contact.consent}</span>
            </label>
            {errors.consent?.message && <p className="text-sm font-semibold text-stamp-dark">{t.errors.consent}</p>}
            <label className="sr-only" aria-hidden>
              Company
              <input tabIndex={-1} autoComplete="off" {...register("company")} />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-h-12 rounded-full bg-leaf px-5 py-3 font-bold text-cream disabled:opacity-60"
            >
              {isSubmitting ? t.contact.sending : t.contact.submit}
            </button>
          </div>
          <div aria-live="polite" className="mt-4">
            {state === "checked" && (
              <div className="rounded-2xl bg-sun p-4">
                <p className="leading-7">{t.contact.notStored}</p>
                <a href={wa} target="_blank" rel="noreferrer" className="mt-3 inline-flex font-bold text-leaf-dark underline">
                  {t.contact.openWhatsapp}
                </a>
              </div>
            )}
            {state === "error" && <p className="font-semibold text-stamp-dark">{t.contact.error}</p>}
          </div>
        </form>
      </div>
      </section>
  );
}

const fieldClass =
  "mt-1 w-full rounded-2xl border border-ink/15 bg-white px-3 py-3 font-normal text-ink";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-bold">
      {label}
      <span className="mt-1 block font-normal">{children}</span>
      {error && <span className="mt-1 block font-semibold text-stamp-dark">{error}</span>}
    </label>
  );
}
