import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dimy.dev"),
  title: "Dimitris | Product Engineer",
  description:
    "Personal portfolio of Dimitris (@dimydev): product-focused web engineering, experiments, and selected work.",
  openGraph: {
    title: "Dimitris | Product Engineer",
    description:
      "Product-focused web engineering, experiments, and selected work by Dimitris.",
    url: "https://dimy.dev",
    siteName: "dimy.dev",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimitris | Product Engineer",
    description:
      "Personal portfolio of Dimitris (@dimydev): projects, stack, and contact."
  },
  alternates: {
    canonical: "https://dimy.dev"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
