import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kantasit Tipsapapkul — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, and FastAPI. Building production-ready healthcare web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "FastAPI",
    "TypeScript",
    "Bangkok",
    "Thailand",
    "Kantasit",
  ],
  authors: [{ name: "Kantasit Tipsapapkul" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kantasit Tipsapapkul — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and FastAPI.",
    url: "https://kantasit.vercel.app",
    siteName: "Kantasit Tipsapapkul",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kantasit Tipsapapkul — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kantasit Tipsapapkul — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and FastAPI.",
    images: ["/og-image.png"],
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
