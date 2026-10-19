export type Lang = "te" | "en";

export function formatPublishedCost(amount: number | null, lang: Lang) {
  if (amount == null) {
    return lang === "te" ? "మొత్తం పెట్టలేదు" : "Amount not listed";
  }
  const grouped = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(amount);
  const crore = amount / 10000000;
  if (crore >= 1) {
    const label = Number.isInteger(crore) ? String(crore) : crore.toFixed(1).replace(/\.0$/, "");
    return lang === "te" ? `₹${label} కోట్లు` : `₹${label} crore`;
  }
  if (amount >= 100000) {
    const lakh = amount / 100000;
    const label = Number.isInteger(lakh) ? String(lakh) : lakh.toFixed(2).replace(/0$/, "");
    return lang === "te" ? `₹${label} లక్షలు` : `₹${label} lakh`;
  }
  return `₹${grouped}`;
}

export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
