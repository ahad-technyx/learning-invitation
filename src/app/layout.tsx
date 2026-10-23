import type { Metadata } from "next";
import { Geist, Amiri } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor-ul-Quran Academy | Online Hifz, Nazra & Tajweed Classes",
  description:
    "Learn the Holy Quran online with Noor-ul-Quran Academy. Explore personalized Hifz, Nazra, and Tajweed classes through video and audio calls, with dedicated female instruction available.",
  openGraph: {
    title: "Noor-ul-Quran Academy | Online Hifz, Nazra & Tajweed Classes",
    description:
      "Personalized online Quran classes — Hifz, Nazra, and Tajweed — with dedicated female instruction available.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-warm text-forest-dark">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
