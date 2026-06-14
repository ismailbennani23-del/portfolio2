import type { Metadata } from "next";
import { Newsreader, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://ismailbennani.vercel.app"; // update after deploy

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ismail Bennani — Finance & Data Analytics Candidate",
  description:
    "Finance and Data Analytics student at Augustana College specializing in financial analysis, reporting automation, and business intelligence. Experienced in accounting operations, tax preparation, and turning data into decisions.",
  keywords: [
    "Ismail Bennani",
    "Finance analyst",
    "Data analytics",
    "Business intelligence",
    "Financial analysis",
    "Augustana College",
    "Accounting",
    "Power BI",
    "SQL",
    "Python",
    "R",
  ],
  authors: [{ name: "Ismail Bennani" }],
  openGraph: {
    title: "Ismail Bennani — Finance & Data Analytics Candidate",
    description:
      "Turning financial and operational data into decisions. Financial analysis, reporting automation, and business intelligence.",
    url: siteUrl,
    siteName: "Ismail Bennani",
    type: "website",
    // For best link previews, add a 1200x630 image at /public/og-image.png and use it here.
    images: [{ url: "/profile-square.jpg", width: 720, height: 720, alt: "Ismail Bennani" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Bennani — Finance & Data Analytics Candidate",
    description:
      "Turning financial and operational data into decisions. Financial analysis, reporting automation, and business intelligence.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
