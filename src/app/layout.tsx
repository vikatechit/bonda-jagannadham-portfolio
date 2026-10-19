import type { Metadata } from "next";
import { Noto_Sans_Telugu, Noto_Serif_Telugu } from "next/font/google";
import { AudioPlayer } from "@/components/AudioPlayer";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { siteUrl } from "@/lib/formatting";
import "./globals.css";

const sans = Noto_Sans_Telugu({
  subsets: ["telugu", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const serif = Noto_Serif_Telugu({
  subsets: ["telugu", "latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const url = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "బొండా జగన్నాధం | Bonda Jagannadham",
    template: "%s | బొండా జగన్నాధం",
  },
  description:
    "విశాఖపట్నం GVMC వార్డు 87 ప్రజా సేవా పోర్ట్‌ఫోలియో. Public service portfolio of Bonda Jagannadham, GVMC Ward 87, Visakhapatnam.",
  applicationName: "Bonda Jagannadham",
  alternates: { canonical: "/" },
  openGraph: {
    title: "బొండా జగన్నాధం | Bonda Jagannadham",
    description:
      "GVMC వార్డు 87, విశాఖపట్నం. అభివృద్ధి పనులు, ప్రజా సేవ, సంప్రదింపు.",
    locale: "te_IN",
    alternateLocale: ["en_IN"],
    type: "website",
    images: [{ url: "/images/portraits/bonda-jagan.jpg", alt: "బొండా జగన్నాధం" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "బొండా జగన్నాధం | Bonda Jagannadham",
    description: "GVMC Ward 87 public service portfolio, Visakhapatnam.",
    images: ["/images/portraits/bonda-jagan.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bonda Jagannadham",
  alternateName: ["బొండా జగన్నాధం", "Bonda Jagan"],
  url,
  image: `${url}/images/portraits/bonda-jagan.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  description:
    "Telugu Desam Party ward member elected in 2021 for Ward 87 of the Greater Visakhapatnam Municipal Corporation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="te" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <Header />
          <main id="content">{children}</main>
          <Footer />
          <AudioPlayer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
