import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { FAB } from "@/components/fab";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centennial Migration",
  description:
    "Centennial Migration: Your leading visa consultant and immigration agency in Dubai, UAE. Streamlining global relocation with expert guidance.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  alternates: {
    canonical: `https://www.centennialmigration.com`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Script src="https://www.googletagmanager.com/gtag/js?id=G-5Y9K5KWPXV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5Y9K5KWPXV');
        `}
      </Script>
      <body className={inter.className}>
        <Toaster />
        <div className="w-full fixed top-0 z-50">
          <Header />
        </div>
        <div className="relative">
          {children}
          <Footer />
          <FAB />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
