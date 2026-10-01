import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFD6E3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: siteData.metaTitle || `Untuk ${siteData.herName} ♡`,
  description: siteData.metaDescription || "A little corner of the internet made just for you.",
  openGraph: {
    title: siteData.metaTitle || `Untuk ${siteData.herName} ♡`,
    description: siteData.metaDescription || "A little corner of the internet made just for you.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💌</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen bg-romantic-bg text-romantic-text selection:bg-romantic-soft selection:text-romantic-text antialiased">
        {children}
      </body>
    </html>
  );
}
