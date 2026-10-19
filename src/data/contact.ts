export const contactConfig = {
  sourceNoteTe: "ఈ నంబర్లు క్లయింట్ పామ్‌ప్లేట్‌పై ముద్రించబడ్డాయి.",
  sourceNoteEn: "These numbers are printed on the client pamphlet.",
  phones: [
    {
      id: "primary",
      e164: "919866857979",
      national: "9866857979",
      display: "98668 57979",
    },
    {
      id: "secondary",
      e164: "917386596979",
      national: "7386596979",
      display: "73865 96979",
    },
  ],
  whatsappE164: "919866857979",
  copiesPrinted: "1000",
} as const;

export function whatsappHref(message: string, e164 = contactConfig.whatsappE164) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}
