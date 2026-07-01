import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import { SiteChrome } from "@/components/SiteChrome";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const siteUrl = "https://portfolio.alwazirtech.ru";

export const metadata: Metadata = {
  title: "Alwaz | Full-Stack Developer",
  description: "Full-stack and Java backend developer portfolio — real projects, live demos, and production-quality code.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alwaz | Full-Stack Developer",
    description: "Full-stack and Java backend developer portfolio — real projects, live demos, and production-quality code.",
    url: siteUrl,
    siteName: "Alwaz Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alwaz | Full-Stack Developer",
    description: "Full-stack and Java backend developer portfolio — real projects, live demos, and production-quality code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <I18nProvider>
          <SiteChrome>{children}</SiteChrome>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
