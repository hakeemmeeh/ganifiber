import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-syne-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-dm-sans-loaded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-600 font-sans">
        {children}
      </body>
    </html>
  );
}
