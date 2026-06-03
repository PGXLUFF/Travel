import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import BottomSection from "../components/BottomSection";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intro Travels India | Best India Tour Packages – B2B & B2C Travel",
  description:
    "Intro Travels India offers customised domestic & international tour packages for individuals, families, corporates, and travel agents. Explore Rajasthan, Kerala, Kashmir, Goa, Leh Ladakh & 50+ destinations. B2B agent partnerships available.",
  keywords: [
    "India tour packages", "customised India tours", "domestic tour packages India",
    "travel agency India", "best travel company India", "B2B travel partner India",
    "corporate tour packages", "Kerala tour package", "Kashmir tour package",
    "Rajasthan tour package", "Goa holiday package", "Leh Ladakh tour",
    "travel agent commission India", "MICE India", "group tour packages India",
    "luxury travel India", "budget tour packages India", "Intro Travels India"
  ],
  openGraph: {
    title: "Intro Travels India | Best India Tour Packages – B2B & B2C",
    description: "Customised India tour packages for individuals, families & corporates. 8+ years, 10,000+ happy travellers. Zero hidden charges.",
    url: "https://www.introtravelsindia.com",
    siteName: "Intro Travels India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intro Travels India | Best India Tour Packages",
    description: "Customised India tours for travellers & businesses. 50+ destinations, expert guides, zero hidden charges.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#0A221F] font-sans">
        <Navbar />
        {children}
        <BottomSection />
      </body>
    </html>
  );
}
