import type { Metadata } from "next";
import {
  DM_Sans,
  Eczar,
  Fraunces,
  Geist_Mono,
  Playfair_Display,
  Roboto_Slab,
  Work_Sans,
} from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Display font — per Figma. Real font, not a substitute.
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Hero title display serif (Rojenstone stand-in).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// Cera Pro (paid) substitute + the Figma's DM Sans eyebrow font.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archaeological Museum · Pafos District",
  description:
    "Explore 10,000 years of Cypriot history at the Archaeological Museum of the Pafos District.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoSlab.variable} ${fraunces.variable} ${eczar.variable} ${workSans.variable} ${dmSans.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
