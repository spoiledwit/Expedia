import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { FAB } from "@/components/fab";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centennial Migration",
  description:
    "Centennial Migration is an immigration agency based in Dubai, UAE.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        </div>
      </body>
    </html>
  );
}
