import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display, Outfit, Montserrat, Space_Grotesk, Oswald, Cinzel, Lora, Manrope } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-syne-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-dm-sans-loaded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gani Fiber Ltd — Infrastructure First. Connectivity Always.",
  description:
    "Wholesale FTTH infrastructure, IP transit, and home broadband — built for ISPs, estates, and businesses across Kenya.",
  keywords: [
    "fiber optic",
    "FTTH",
    "broadband",
    "Kenya",
    "ISP",
    "internet",
    "Gani Fiber",
    "IP transit",
    "Nairobi",
  ],
  authors: [{ name: "Gani Fiber Ltd" }],
  openGraph: {
    title: "Gani Fiber Ltd — Infrastructure First. Connectivity Always.",
    description:
      "Wholesale FTTH infrastructure, IP transit, and home broadband — built for ISPs, estates, and businesses across Kenya.",
    type: "website",
    locale: "en_KE",
  },
};

import FontTester from "@/components/ui/FontTester";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${outfit.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${oswald.variable} ${cinzel.variable} ${lora.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-600 font-sans">
        <SmoothScroll>
          {children}
          <FontTester />
        </SmoothScroll>
      </body>
    </html>
  );
}
