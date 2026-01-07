import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 1. THE "PRO" SEO CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://vizionfinance.co.uk"),

  title: {
    default: "Stock Vehicles | Vizion Finance",
    template: "%s | Vizion Finance", // Adds " | Vizion Finance" to every child page title automatically
  },
  description:
    "Browse our premium selection of used vehicles. Flexible finance options available.",

  // B. Search Engine Crawler Control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // C. Social Media Previews (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Stock Vehicles | Vizion Finance",
    description: "Find your dream car with our competitive financing options.",
    url: "https://vizionfinance.co.uk/stock-vehicles",
    siteName: "Vizion Finance",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You need to put an image in your public folder
        width: 1200,
        height: 630,
        alt: "Vizion Finance Stock Vehicles",
      },
    ],
  },

  // D. Twitter Card (X)
  twitter: {
    card: "summary_large_image",
    title: "Stock Vehicles | Vizion Finance",
    description: "Find your dream car with our competitive financing options.",
    images: ["/og-image.jpg"], // Re-use the same image
  },

  // E. Canonical URL (Prevents Duplicate Content penalties)
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
