import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import PopupBanner from "./popup-banner";
import Navbar from "./navbar";
import ProgressBar from "./progress-bar";
import CustomCursor from "./custom-cursor";
import AIChatbot from "./ai-chatbot";
import MarketingPopups from "./marketing-popups";
import TopBanner from "./top-banner";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeSgo Courier Service | Fast Same-Day Delivery Philippines",
  description:
    "Fast, reliable courier service in Philippines with real-time tracking, verified riders, and same-day delivery. LeSeat food delivery, LeSgo courier, LeSbuy errands. Download the app today!",
  keywords: [
    "courier service Philippines",
    "fast delivery service",
    "same-day delivery",
    "real-time package tracking",
    "verified delivery riders",
    "affordable courier service",
    "express delivery Philippines",
    "LeSgo courier",
    "food delivery service",
    "parcel delivery",
  ].join(", "),
  openGraph: {
    title: "LeSgo Courier Service | Fast Same-Day Delivery Philippines",
    description:
      "Experience fast, reliable courier services with real-time tracking and verified riders. Same-day delivery available nationwide.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeSgo Courier Service | Fast Same-Day Delivery",
    description: "Fast, reliable courier services with real-time tracking",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://lesgo.ph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LeSgo Courier Services",
    image: "https://lesgo.ph/logo.png",
    description:
      "Fast, reliable courier service with real-time tracking and verified riders",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Claveria",
      addressLocality: "Cagayan Valley",
      addressCountry: "PH",
    },
    telephone: "+63-2-1234-5678",
    email: "hello@lesgo.ph",
    url: "https://lesgo.ph",
    sameAs: [
      "https://facebook.com/lesgo",
      "https://twitter.com/lesgo",
      "https://instagram.com/lesgo",
    ],
    priceRange: "₱",
    areaServed: "PH",
    serviceType: [
      "Courier Service",
      "Food Delivery",
      "Errand Service",
      "Same-Day Delivery",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <ProgressBar />
        <TopBanner />
        <Navbar />
        <PopupBanner />
        <MarketingPopups />
        <AIChatbot />
        {children}
      </body>
    </html>
  );
}
